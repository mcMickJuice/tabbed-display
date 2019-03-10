import React from 'react'

const tabStyle = {
  padding: '16px',
  width: '100px',
  textAlign: 'center'
}

const Tab = ({ onClick, selected, children }) => {
  const style = {
    ...tabStyle,
    backgroundColor: selected ? 'lightblue' : 'lightgray'
  }
  return (
    <div onClick={onClick} style={style}>
      {children}
    </div>
  )
}

const data = {
  1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        accumsan mi ut lorem egestas, ac viverra risus semper. Fusce in lacus
        porta neque posuere volutpat. Morbi finibus purus sit amet libero
        rutrum, vel varius eros tincidunt. Nulla non mattis sem. Nunc eleifend
        mi tortor, eu congue dolor vehicula eu. Quisque ullamcorper turpis vitae
        lacus tincidunt commodo. Nunc vitae vehicula tortor, eget eleifend elit.
        Nullam efficitur magna libero, vitae consequat eros congue a.`,
  2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit lobortis ex, in cursus odio aliquam sit amet. Duis in elementum sapien, non fringilla nisi. Ut vitae ornare justo, sed commodo ipsum. Curabitur non tincidunt lacus, pulvinar scelerisque lectus. Duis vehicula odio a volutpat laoreet. Quisque blandit ligula quam. Nullam consequat justo a augue blandit volutpat.`,
  3: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum fermentum ligula at sodales. Nunc malesuada mattis dapibus. Curabitur non diam id orci pellentesque interdum a vel odio. Sed hendrerit sed urna vel cursus. Quisque dapibus consectetur sem, blandit luctus urna finibus sagittis. Suspendisse vitae consectetur eros, non hendrerit magna. Sed commodo pharetra dolor, sit amet euismod ex tincidunt vel. Cras feugiat quis felis vitae condimentum. Quisque vitae accumsan erat.`
}

const Contents = ({ tabNumber }) => {
  const content = data[tabNumber]
  return (
    <div>
      <h2>Tab {tabNumber} Section</h2>
      <p>{content}</p>
    </div>
  )
}

class TabbedDisplay extends React.Component {
  state = {
    currentTab: 1
  }
  handleTabSelect = tab => {
    this.setState({
      currentTab: tab
    })
  }
  render() {
    const { currentTab } = this.state
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Tab
            onClick={() => this.handleTabSelect(1)}
            selected={currentTab === 1}
          >
            Tab 1
          </Tab>
          <Tab
            onClick={() => this.handleTabSelect(2)}
            selected={currentTab === 2}
          >
            Tab 2
          </Tab>
          <Tab
            onClick={() => this.handleTabSelect(3)}
            selected={currentTab === 3}
          >
            Tab 3
          </Tab>
        </div>
        <div
          style={{
            marginTop: '16px',
            border: '1px solid black',
            padding: '16px'
          }}
        >
          {currentTab === 1 ? (
            <Contents tabNumber={1} />
          ) : currentTab === 2 ? (
            <Contents tabNumber={2} />
          ) : (
            <Contents tabNumber={3} />
          )}
        </div>
      </div>
    )
  }
}

export default TabbedDisplay
