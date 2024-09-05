import { Component } from "react";
const styles ={
    layout:{
        backgoundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    comtainer: {
        width: '1200px',
    }
}
class Layout extends Component{
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.comtainer}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout