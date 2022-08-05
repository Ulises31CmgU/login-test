import React from 'react'
import { connect } from 'react-redux'

export const UserListPageComponent = (props: any) => {
  return (
    <div>UserListPageComponent</div>
  )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPageComponent)