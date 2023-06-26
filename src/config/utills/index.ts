import Toast from 'react-native-toast-message';
import moment from 'moment';

const passwordRegex =
  /^.*(?=.{3,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\x])(?=.*[@!$#&*%^]).*$/;
// const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,16}$/;
const emailRegex = /^\w+([\.-]?\w+)*@{1}\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/;

const fullNameRegex =
  /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/;

const phoneNoRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

function validatePassword(password: string): boolean {
  return passwordRegex.test(password);
}

function validatePhoneNumber(phone: string): boolean {
  return phoneNoRegex.test(phone);
}

function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}

function validateAlpha(name: string): boolean {
  return fullNameRegex.test(name);
}

export function showToast(
  message?: string,
  error?: any,
  status: string = 'info',
): void {
  let err = error?.message;
  // console.log("inshowtoast-----", err);
  if (err === 'timeout of 10000ms exceeded') {
    Toast.show({
      text1: 'Connectivity Issue',
      // position: 'absolute',
      // bottom:0,
      topOffset: 60,
      type: status,
      // textStyle: { textAlign: "center" },
      // duration: duration,
      // isClosable: false,
      // placement: "top",
      // fontWeight: "extrabold",

      // backgroundColor:'red',
    });
  } else if (err === 'Network Error') {
    Toast.show({
      text1: err,
      // position: 'absolute',
      // bottom:0,
      type: status,
      topOffset: 60,
      // textStyle: { textAlign: "center" },
      // duration: duration,
      // isClosable: false,
      // placement: "top",
      // fontWeight: "extrabold",
      // backgroundColor:'red',
    });
  } else {
    Toast.show({
      text1: message,
      // position: 'absolute',
      // bottom:0,
      topOffset: 60,
      type: status,
      // textStyle: { textAlign: "center" },
      // duration: duration,
      // isClosable: false,
      // placement: "top",
      // fontWeight: "extrabold",
      // backgroundColor:'red',
    });
  }
}

const timeHumanize = (time: string): string => {
  let current_time: any = moment().format('x');
  // let local_time = moment.utc(time).toDate();
  let to_local = moment(time).format('YYYY-MM-DD HH:mm:ss');
  let that_time: any = moment(to_local).format('x');
  let diff = current_time - that_time;

  var final_time = Math.floor(diff / 1000 / 60);
  if (final_time < 1) {
    return 'just now';
  } else if (final_time >= 1 && final_time < 60) {
    if (final_time < 2) {
      return `${final_time} min ago`;
    } else {
      return `${final_time} min ago`;
    }
  } else if (final_time >= 60 && final_time < 1440) {
    let new_hour = Math.floor(final_time / 60);
    if (new_hour <= 1) {
      return `${new_hour} hour ago`;
    } else {
      return `${new_hour} hours ago`;
    }
  } else {
    return moment(time).calendar(null, {
      lastDay: `[yesterday ${moment(time).format('hh:mm A')}]`,
      lastWeek: `[${moment(time).format('DD, MMM YYYY  hh:mm A')}]`,
      sameElse: `[${moment(time).format('DD, MMM YYYY  hh:mm A')}]`,
    });
  }
};

export default {
  validatePassword,
  validateAlpha,
  validateEmail,
  validatePhoneNumber,
  showToast,
  timeHumanize,
};
