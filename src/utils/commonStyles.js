import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    backView: {
      marginTop: height * 0.05,
    },
    cardTitle: {
      marginLeft: '10%',
      color: 'grey'
    }
  })

  export default styles