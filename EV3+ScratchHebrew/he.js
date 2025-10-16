//this is the scratchX extension which adds the CoderZ-like blocks to scratch
var a = document.createElement("script");
a.async = !0, a.src = "https://www.googletagmanager.com/gtag/js?id=UA-112592765-1";
var f = document.getElementsByTagName("head")[0];
f.appendChild(a);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-112592765-1');


(function(ext) {

  var LANG = 'he'

  var words = {
    en: {
      brake: 'brake',
      coast: 'coast',
      LeftMotor: 'left motor',
      RightMotor: 'right motor',
      forward: 'forward',
      backward: 'backward',
      true: 'true',
      false: 'false',
      rotate: 'rotate',
      rotateTo: 'rotate to',
      AngleMode: 'angle mode',
      RateMode: 'rate mode',
      ColorID: 'color ID',
      red: 'red',
      redMode: 'red mode',
      green: 'green',
      orange: 'orange',
      on: 'on',
      off: 'off',
      blinking: 'blinking',
      startMotor: 'start motor',
      speed: 'speed',
      stopMotor: 'stop motor',
      motor: 'motor',
      motors: 'motors',
      degreesAtSpeed: 'degrees at speed',
      rotationAtSpeed: 'rotation at speed',
      setLEDColor: 'set LED color',
      status: 'status',
      resetGyro: 'reset gyro',
      measureGyro: 'measureGyro',
      touchIsPressed: 'is touch pressed',
      measureColor: 'measure color',
      measureUltrasonic: 'measure ultrasonic',
      playNote: 'play note',
      duration: 'duration',
      getTachoCount: 'measure taco count',
      resetTachoCount: 'reset taco count'
    },
    he: {
      brake: 'מיידי',
      coast: 'דעיכה',
      LeftMotor: 'שמאלי',
      RightMotor: 'ימני',
      forward: 'קדימה',
      backward: 'אחורה',
      true: 'חיובי',
      false: 'שלילי',
      rotate: 'סיבוב',
      rotateTo: 'סיבוב אל',
      AngleMode: 'מצב זווית',
      RateMode: 'מצב דירוג',
      ColorID: 'זהות צבע',
      red: 'אדום',
      redMode: 'אדום (מד אור)',
      green: 'ירוק',
      orange: 'כתום',
      on: 'דלוק',
      off: 'כבוי',
      blinking: 'הבהוב',
      startMotor: 'הפעל מנוע',
      speed: 'מהירות',
      stopMotor: 'עצור מנוע',
      motor: 'מנוע',
      motors: 'מנועים',
      degreesAtSpeed: 'מעלות מהירות',
      rotationAtSpeed: 'סיבובי מנוע במהירות',
      setLEDColor: 'הפעל מנורת לד',
      status: 'סטאטוס',
      resetGyro: "אתחל ג'יירו",
      measureGyro: "מדוד ג'יירו",
      touchIsPressed: 'חיישן מגע לחוץ',
      measureColor: 'מדוד חיישן צבע',
      measureUltrasonic: 'מדוד אולטרא סוניק',
      playNote: 'נגן תו',
      duration: 'במשך',
      getTachoCount: 'מדוד מעלות מנוע',
      resetTachoCount: 'אתחל מעלות מנוע',
    },
    ar: {
      brake: 'فورا',
      coast: 'تدريجا',
      LeftMotor: 'محرك شمال',
      RightMotor: 'محرك يمين',
      forward: 'ااالى الامام',
      backward: 'ااااالى الخلف',
      true: 'ايجابي',
      false: 'سلبي',
      rotate: 'استدر',
      rotateTo: 'اااستدر الى',
      AngleMode: 'الزاوية',
      RateMode: 'الوتيرة',
      ColorID: 'ررقم اللون',
      red: 'احمر',
      redMode: 'ااحمر (قياس الضوء)',
      green: 'اخضر',
      orange: 'برتقالي',
      on: 'تشغيل',
      off: 'إإإيقاف',
      blinking: 'وميض ',
      startMotor: 'شغل االمحرك',
      speed: 'بسرعة',
      stopMotor: 'أأأوقف االمحرك ',
      motor: 'االمحرك',
      motors: 'االمحركات',
      degreesAtSpeed: 'درجة بسرعة',
      rotationAtSpeed: 'دورات بسرعة',
      setLEDColor: 'ضبط لون الضوء',
      status: 'وضع',
      resetGyro: 'إعادة ضبط الجايرو',
      measureGyro: 'قس جايرو',
      touchIsPressed: 'ــمجس اااللمس مضغوط',
      measureColor: 'قس اااللون',
      measureUltrasonic: 'قس ااولتراسونيك',
      playNote: 'شغل النوتة',
      duration: 'لمدة',
      getTachoCount: 'قس اادرجات االمحرك',
      resetTachoCount: 'إعادة ضبط اادرجات االمحرك'
    }
  }

  ext._shutdown = function() {

  }

  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  }
  //list of functions triggered when coresponding block is triggered,
  //can be used to send bluetooth/API requests

  ext.stopMotor = function(pattern, callback) {

  }

  ext.startMotor = function(pattern, callback) {

  }

  ext.drive = function(pattern, callback) {

  }

  ext.setMotor = function(pattern, callback) {

  }

  ext.rotateMotor = function(pattern, callback) {

  }

  ext.gyroReset = function(pattern, callback) {

  }

  ext.getGyroMode = function(pattern, callback) {

  }

  ext.touchIsPressed = function(pattern, callback) {

  }

  ext.getUltrasonic = function(pattern, callback) {

  }

  ext.getTacho = function(pattern, callback) {

  }

  ext.resetTacho = function(pattern, callback) {

  }

  ext.getColor = function(pattern, callback) {

  }

  ext.playNote = function(pattern, callback) {

  }

  console.log(words)
  var descriptor = {
    blocks: [
      ['w', words[LANG].startMotor + ' %m.whichMotorID ' + words[LANG].speed + ' %n %m.turnStyle',         'startMotor', 'A', 100, words[LANG].forward],
      ['w', words[LANG].stopMotor + ' %m.whichMotorID %m.brakeType',              'stopMotor',      'A', words[LANG].brake],
      ['w', words[LANG].motor + ' %m.whichMotorID %m.rotate %n ' + words[LANG].degreesAtSpeed + ' %n',              'rotateMotor',      'A', words[LANG].rotate, 30, 100],

      ['w', words[LANG].motors + ' %m.whichMotorID + %m.whichMotorID %m.rotate %n ' + words[LANG].degreesAtSpeed + ' ' + words[LANG].RightMotor+' %n' + ' ' + words[LANG].LeftMotor +' %n',              'rotateMotors',      'A','B', words[LANG].rotate, 30, 100,100],
      ['w', words[LANG].motors + ' %m.whichMotorID + %m.whichMotorID %m.rotate %n ' + words[LANG].rotationAtSpeed + ' ' + words[LANG].RightMotor+' %n' + ' ' + words[LANG].LeftMotor +' %n',              'MotorRotation',      'A','B', words[LANG].rotate, 1, 100,100],

      ['w', words[LANG].setLEDColor + ' %m.whichColor ' + words[LANG].status + ' %m.whichStatus',              'setLED',      words[LANG].green, words[LANG].on],
      ['w', words[LANG].resetGyro, 'gyroReset'],
      ['r', words[LANG].measureGyro + ' %m.gyroMode', 'getGyroMode', words[LANG].AngleMode],
      ['b', words[LANG].touchIsPressed, 'touchIsPressed'],
      ['r', words[LANG].measureColor + ' %m.colorMode', 'getColor', words[LANG].ColorID],
      ['r', words[LANG].measureUltrasonic, 'getUltrasonic'],
      ["w", words[LANG].playNote + ' %m.note ' + words[LANG].duration + ' %n ms',                    "playNote",         "C5", 500],
      ['r', words[LANG].motor + ' %m.whichMotorID ' + words[LANG].getTachoCount, 'getTacho', 'A'],
      ['w', words[LANG].motor + ' %m.whichMotorID ' + words[LANG].resetTachoCount, 'resetTacho', 'A'],
    ],
    'menus': {
      'brakeType': [words[LANG].brake, words[LANG].coast],
      'whichMotorID': ['A', 'B', 'C', 'D'],
      'whichMotor': [words[LANG].LeftMotor, words[LANG].RightMotor],
      'turnStyle': [words[LANG].forward, words[LANG].backward],
      'boolean': [words[LANG].true, words[LANG].false],
      'rotate': [words[LANG].rotate, words[LANG].rotateTo],
	    'gyroMode': [words[LANG].AngleMode, words[LANG].RateMode],
      'colorMode': [words[LANG].ColorID, words[LANG].redMode],
      'whichColor': [words[LANG].green, words[LANG].orange, words[LANG].red],
      'whichStatus': [words[LANG].on, words[LANG].off, words[LANG].blinking],
      "note":["C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C#4","D#4","F#4","G#4","A#4","C#5","D#5","F#5","G#5","A#5","C#6","D#6","F#6","G#6","A#6"],
   	},
  };

  ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
