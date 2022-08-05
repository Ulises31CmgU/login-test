import React from 'react'
import { connect } from 'react-redux'

export const LoginPageComponent = (props: any) => {
  return (
    <div>LoginPageComponent</div>
  )
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent)