import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginTop: 10
  },
  avt: {fontSize: 200, color: '#C4C4C4'},
  phone: {marginTop: 20, fontSize: 25, fontWeight: 'bold'},
  line: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginBottom:5,
    flexWrap: 'wrap',
    paddingVertical:10
  },
});
