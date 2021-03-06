import React from 'react'
import Select from './Select.jsx'


class BoardSelector extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return <Select
            onChange={this.props.onChange}
            placeHolder={"Select a board"}
            options={
                Object.keys(this.props.groupedboards).map(function (key) {
                    let group = this.props.groupedboards[key];
                    return <optgroup key={key} label={key}>
                        {(
                            group.map(function (board) {
                                return <option key={board.id} value={board.id}>{board.name}</option>
                            }.bind(this))
                        )} </optgroup>
                }.bind(this))
            }
        />
    }


}

export default BoardSelector
