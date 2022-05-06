import React from 'react'
import APIService from './AccountService'

export default class AccountComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             accounts: []
        }
    }
    
    componentDidMount(){
        APIService.getBooks().then((data) => {
            this.setState({ books: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Book Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Book Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books.map(book =>
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.bookName}</td>
                                        <td>{book.author}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }