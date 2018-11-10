import React, { Component } from 'react'

class Application extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [{
        value: 'Pants',
        id: Date.now(),
        packed: false
      }]
    }
    this.addItem = this.addItem.bind(this)
    this.markAsPacked = this.markAsPacked.bind(this)
    this.markAllAsUnpacked = this.markAllAsUnpacked(this)
  }

  addItem(item) {}
  markAsPacked(item) {
    const otherItems = this.state.items.filter(
      other => other.id !== item.id
    )
    const updatedItem = { ...item, packed: !item.packed }
    this.setState({ items: [updatedItem, ...otherItems] })
  }
  markAllAsUnpacked() {
    const items = this.state.items.map(item => ({ ...item, packed: false }))
    this.setState({ items })
  }

  render() {
    const { items } = this.state
    const unpackedItems = items.filter(item => !item.packed)
    const packedItems = items.filter(item => item.packed)

    return (
      <div className='Application'>
        {/* To be implented: <NewItem /> */}
        <Items 
          title = 'Unpacked Items'
          items = { unpackedItems }
          onCheckOff = { this.markAsPacked } 
        />
        <Items 
          title = 'Packed Items'
          items = { packedItems }
          onCheckOff = { this.markAsPacked }
        />
        <button className='button full-width' onClick={ this.markAllAsUnpacked }>
          Mark All As Unpacked
        </button>
      </div>
    )
  }
}

export default Application