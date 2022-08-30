import { useEffect } from 'react'
import {useSelector} from 'react-redux'


const Table = () => {

    const users = useSelector(state => state.users.users)
    console.log(users)

    const renderTableHeader = () => {
        let header = Object.keys(users[0])
        return header.map((key, index) => (
            <th key={index} >{key}</th>
        ))
    }

    const renderTableData = () => {
        return users.map((user, index) => {
            let items = Object.values(user)
            return (
                <tr key={index}>
                    {items.map((item, index) => (
                        <td key={index}>{item}</td>
                    ))}
                </tr>
            )
        })
    }

    useEffect(()=>{

    }, [users])

    if(users){
        return(
            <table>
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                </tbody>
            </table>
        )

    }

}

export default Table;