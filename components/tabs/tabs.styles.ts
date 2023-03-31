import { StyleSheet } from "react-native";

import { COLOR , SHADOWS, SIZES} from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: {
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.xLarge,
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLOR.white,
  
  },
  btnText:  {
    fontSize: SIZES.small,
  },
});



export default styles;

