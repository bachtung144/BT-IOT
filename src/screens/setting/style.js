import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  avt: {fontSize: 200, color: '#C4C4C4'},
  phone: {marginTop: 20, fontSize: 25, fontWeight: 'bold'},
  line: {
    marginTop: '5%',
    backgroundColor: 'white',
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
