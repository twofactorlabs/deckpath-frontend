import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: white;
`

class Task extends Component {
    render() {
        const { task, index } = this.props

        return (
            <Draggable draggableId={task.id} index={index}>
                {provided => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {task.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Task
