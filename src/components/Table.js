import React from 'react';

const TableHeader = () => { 
    // boilerplate table header functional component'
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    // boilerplate table body functional component 
    // we use Array.map to create table rows from LinkData passed via props
    const rows = props.linkData.map((row, index) => {
        console.log("TableBody: " + index)
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={(e) => props.removeLink(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    //const { linkData, removeLink } = props;
  
    return(
        <div>
            <table>
            <TableHeader> </TableHeader>
            <TableBody linkData={props.linkData} removeLink={props.removeLink}/>
            </table>
        </div>
    )

}

export default Table;