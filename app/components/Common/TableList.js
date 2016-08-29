import React from 'react'

export const tableList = (thead, tbody) => class TableList extends React.Component {
    render() {
        return (
            <table className="table table-striped">
                {thead}
                {tbody}
            </table>
        )
    }
}

export default tableList