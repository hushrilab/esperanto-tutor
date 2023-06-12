import React, { useState, useEffect } from 'react';
import ROSLIB from 'roslib';

//lesson graphics
import dutch from './lesson_graphics/dutch.png'
import france from './lesson_graphics/france.png'
import graphic_mangi from './lesson_graphics/graphic_mangi.png'
import graphic_mangi2 from './lesson_graphics/graphic_mangi2.jpg'
import germany from './lesson_graphics/germany.png'
import graphic_adiau1 from './lesson_graphics/graphic_adiau1.png'
import graphic_adiau2 from './lesson_graphics/graphic_adiau2.png'
import graphic_automobilo from './lesson_graphics/graphic_automobilo.png'
import graphic_automobilo2 from './lesson_graphics/graphic_automobilo2.png'
import graphic_biciklo1 from './lesson_graphics/graphic_biciklo1.png'
import graphic_biciklo2 from './lesson_graphics/graphic_biciklo2.png'
import graphic_bonanmatenon from './lesson_graphics/graphic_bonanmatenon.png'
import graphic_bonanmatenon2 from './lesson_graphics/graphic_bonanmatenon2.png'
import graphic_domo from './lesson_graphics/graphic_domo.png'
import graphic_domo2 from './lesson_graphics/graphic_domo2.png'
import graphic_dormu from './lesson_graphics/graphic_dormu.png'
import graphic_dormu2 from './lesson_graphics/graphic_dormu2.png'
import graphic_gimnazio from './lesson_graphics/graphic_gimnazio.png'
import graphic_gimnazio2 from './lesson_graphics/graphic_gimnazio2.png'
import graphic_gimnazio3 from './lesson_graphics/graphic_gimnazio3.png'
import graphic_gimnazio4 from './lesson_graphics/graphic_gimnazio4.png'
import graphic_goja from './lesson_graphics/graphic_goja.png'
import graphic_malgoja from './lesson_graphics/graphic_malgoja.png'
import graphic_malgoja2 from './lesson_graphics/graphic_malgoja2.png'
import graphic_saluton from './lesson_graphics/graphic_saluton.jpg'
import graphic_saluton2 from './lesson_graphics/graphic_saluton2.png'
import graphic_studi from './lesson_graphics/graphic_studi.png'
import graphic_studi2 from './lesson_graphics/graphic_studi2.jpg'
import italy from './lesson_graphics/italy.png'
import start_learning from './lesson_graphics/learn_some_esperanto.png'

//tablet screen pictures
import adiau from './tablet_screen/adiau.jpg'
import automobilo from './tablet_screen/automobilo.jpg'
import biciklo from './tablet_screen/biciklo.jpg'
import bonanmatenon from './tablet_screen/bonanmatenon.jpg'
import domo from './tablet_screen/domo.jpg'
import dormu from './tablet_screen/dormu.jpg'
import gimnazio from './tablet_screen/gimnazio.jpg'
import goja from './tablet_screen/goja.jpg'
import malgoja from './tablet_screen/malgoja.jpg'
import mangi from './tablet_screen/mangi.jpg'
import q1_saluton from './tablet_screen/q1_saluton.jpg'
import q2_adiau from './tablet_screen/q2_adiau.jpg'
import q3_bonanmatenon from './tablet_screen/q3_bonanmatenon.jpg'
import q4_automobilo from './tablet_screen/q4_automobilo.jpg'
import q5_biciklo from './tablet_screen/q5_biciklo.jpg'
import q6_gimnazio from './tablet_screen/q6_gimnazio.jpg'
import q7_domo from './tablet_screen/q7_domo.jpg'
import q8_goja from './tablet_screen/q8_goja.jpg'
import q9_malgoja from './tablet_screen/q9_malgoja.jpg'
import q10_studi from './tablet_screen/q10_studi.jpg'
import q11_dormu from './tablet_screen/q11_dormu.jpg'
import q12_mangi from './tablet_screen/q12_mangi.jpg'
import saluton from './tablet_screen/saluton.jpg'
import studi from './tablet_screen/studi.jpg'
import black_screen from './tablet_screen/black.jpg'
import what_is_esperanto from './tablet_screen/whatsEsperanto.png'
import end from './tablet_screen/end.jpg'

import q1Q from './tablet_screen/q1Q.jpg'
import q1A from './tablet_screen/q1A.jpg'
import q2Q from './tablet_screen/q2Q.jpg'
import q2A from './tablet_screen/q2A.jpg'
import q3Q from './tablet_screen/q3Q.jpg'
import q3A from './tablet_screen/q3A.jpg'
import q4Q from './tablet_screen/q4Q.jpg'
import q4A from './tablet_screen/q4A.jpg'
import q5Q from './tablet_screen/q5Q.jpg'
import q5A from './tablet_screen/q5A.jpg'
import q6Q from './tablet_screen/q6Q.jpg'
import q6A from './tablet_screen/q6A.jpg'
import q7Q from './tablet_screen/q7Q.jpg'
import q7A from './tablet_screen/q7A.jpg'
import q8Q from './tablet_screen/q8Q.jpg'
import q8A from './tablet_screen/q8A.jpg'
import q9Q from './tablet_screen/q9Q.jpg'
import q9A from './tablet_screen/q9A.jpg'
import q10Q from './tablet_screen/q10Q.jpg'
import q10A from './tablet_screen/q10A.jpg'
import q11Q from './tablet_screen/q11Q.jpg'
import q11A from './tablet_screen/q11A.jpg'
import q12Q from './tablet_screen/q12Q.jpg'
import q12A from './tablet_screen/q12A.jpg'

//word audio files
import adiau_wav from './vocab_audio_robot_voice/adiau.wav'
import automobilo_wav from './vocab_audio_robot_voice/automobilo.wav'
import biciklo_wav from './vocab_audio_robot_voice/biciklo.wav'
import bonanmatenon_wav from './vocab_audio_robot_voice/bonanmatenon.wav'
import domo_wav from './vocab_audio_robot_voice/domo.wav'
import dormu_wav from './vocab_audio_robot_voice/dormu.wav'
import gimnazio_wav from './vocab_audio_robot_voice/gimnazio.wav'
import goja_wav from './vocab_audio_robot_voice/goja.wav'
import happy_dog_stick_mp4 from './vocab_audio_robot_voice/happy_dog_stick.mp4'
import malgoja_wav from './vocab_audio_robot_voice/malgoja.wav'
import mangi_wav from './vocab_audio_robot_voice/mangi.wav'
import saluton_wav from './vocab_audio_robot_voice/saluton.wav'
import silent_quarter_second_wav from './vocab_audio_robot_voice/silent_quarter-second.wav'
import studi_wav from './vocab_audio_robot_voice/studi.wav'

//tutor condition feedback
import esperanto_1_mp3 from './tutor_condition/esperanto_1.mp3'
import esperanto_2_mp3 from './tutor_condition/esperanto_2.mp3'
import esperanto_3_mp3 from './tutor_condition/esperanto_3.mp3'
import lesson_run_down_mp3 from './tutor_condition/lesson_run_down.mp3'
import maple_self_intro_mp3 from './tutor_condition/maple_self_intro.mp3'
import next_q_v1_mp3 from './tutor_condition/next_q_v1.mp3'
import next_q_v2_mp3 from './tutor_condition/next_q_v2.mp3'
import sounds_good_1_mp3 from './tutor_condition/sounds_good_1.mp3'
import sounds_good_2_mp3 from './tutor_condition/sounds_good_2.mp3'
import sounds_good_3_mp3 from './tutor_condition/sounds_good_3.mp3'
import try_pronouncing_mp3 from './tutor_condition/try_pronouncing.mp3'

//section1
import ask_q1_mp3 from './tutor_condition/vocab_section_1/ask_q1.mp3'
import ask_q2_mp3 from './tutor_condition/vocab_section_1/ask_q2.mp3'
import ask_q3_mp3 from './tutor_condition/vocab_section_1/ask_q3.mp3'
import feedback_q1_correct_mp3 from './tutor_condition/vocab_section_1/feedback_q1_correct.mp3'
import feedback_q1_wrong_mp3 from './tutor_condition/vocab_section_1/feedback_q1_wrong.mp3'
import feedback_q2_correct_mp3 from './tutor_condition/vocab_section_1/feedback_q2_correct.mp3'
import feedback_q2_wrong_mp3 from './tutor_condition/vocab_section_1/feedback_q2_wrong.mp3'
import feedback_q3_correct_mp3 from './tutor_condition/vocab_section_1/feedback_q3_correct.mp3'
import feedback_q3_wrong_mp3 from './tutor_condition/vocab_section_1/feedback_q3_wrong.mp3'
import next_q_v3_mp3 from './tutor_condition/vocab_section_1/next_q_v3.mp3'
import next_q_v4_mp3 from './tutor_condition/vocab_section_1/next_q_v4.mp3'
import practice_1_intro_mp3 from './tutor_condition/vocab_section_1/practice_1_intro.mp3'
import start_teaching_1_mp3 from './tutor_condition/vocab_section_1/start_teaching_1.mp3'
import teach_adiau_1_mp3 from './tutor_condition/vocab_section_1/teach_adiau_1.mp3'
import teach_adiau_2_mp3 from './tutor_condition/vocab_section_1/teach_adiau_2.mp3'
import teach_bonanmatenon_1_mp3 from './tutor_condition/vocab_section_1/teach_bonanmatenon_1.mp3'
import teach_saluton_1_mp3 from './tutor_condition/vocab_section_1/teach_saluton_1.mp3'
import teach_saluton_2_mp3 from './tutor_condition/vocab_section_1/teach_saluton_2.mp3'

//section2
import ask_q4_mp3 from './tutor_condition/vocab_section_2/ask_q4.mp3'
import ask_q5_mp3 from './tutor_condition/vocab_section_2/ask_q5.mp3'
import ask_q6_mp3 from './tutor_condition/vocab_section_2/ask_q6.mp3'
import ask_q7_mp3 from './tutor_condition/vocab_section_2/ask_q7.mp3'
import feedback_q4_correct_mp3 from './tutor_condition/vocab_section_2/feedback_q4_correct.mp3'
import feedback_q4_wrong_mp3 from './tutor_condition/vocab_section_2/feedback_q4_wrong.mp3'
import feedback_q5_correct_mp3 from './tutor_condition/vocab_section_2/feedback_q5_correct.mp3'
import feedback_q5_wrong_mp3 from './tutor_condition/vocab_section_2/feedback_q5_wrong.mp3'
import feedback_q6_correct_mp3 from './tutor_condition/vocab_section_2/feedback_q6_correct.mp3'
import feedback_q6_wrong_mp3 from './tutor_condition/vocab_section_2/feedback_q6_wrong.mp3'
import feedback_q7_correct_mp3 from './tutor_condition/vocab_section_2/feedback_q7_correct.mp3'
import feedback_q7_wrong_mp3 from './tutor_condition/vocab_section_2/feedback_q7_wrong.mp3'
import practice_2_intro_mp3 from './tutor_condition/vocab_section_2/practice_2_intro.mp3'
import start_teaching_2_mp3 from './tutor_condition/vocab_section_2/start_teaching_2.mp3'
import teach_automobilo_mp3 from './tutor_condition/vocab_section_2/teach_automobilo.mp3'
import teach_biciklo_mp3 from './tutor_condition/vocab_section_2/teach_biciklo.mp3'
import teach_domo_mp3 from './tutor_condition/vocab_section_2/teach_domo.mp3'
import teach_gimnazio_mp3 from './tutor_condition/vocab_section_2/teach_gimnazio.mp3'

//section3
import ask_q8_mp3 from './tutor_condition/vocab_section_3/ask_q8.mp3'
import ask_q9_mp3 from './tutor_condition/vocab_section_3/ask_q9.mp3'
import feedback_q8_correct_mp3 from './tutor_condition/vocab_section_3/feedback_q8_correct.mp3'
import feedback_q8_wrong_mp3 from './tutor_condition/vocab_section_3/feedback_q8_wrong.mp3'
import feedback_q9_correct_mp3 from './tutor_condition/vocab_section_3/feedback_q9_correct.mp3'
import feedback_q9_wrong_mp3 from './tutor_condition/vocab_section_3/feedback_q9_wrong.mp3'
import practice_3_intro_mp3 from './tutor_condition/vocab_section_3/practice_intro_3.mp3'
import start_teaching_3_mp3 from './tutor_condition/vocab_section_3/start_teaching_3.mp3'
import teach_goja_mp3 from './tutor_condition/vocab_section_3/teach_goja.mp3'
import teach_malgoja_mp3 from './tutor_condition/vocab_section_3/teach_malgoja.mp3'

//section4
import ask_q10_mp3 from './tutor_condition/vocab_section_4/ask_q10.mp3'
import ask_q11_mp3 from './tutor_condition/vocab_section_4/ask_q11.mp3'
import ask_q12_mp3 from './tutor_condition/vocab_section_4/ask_q12.mp3'
import end_lesson_mp3 from './tutor_condition/vocab_section_4/end_lesson.mp3'
import feedback_q10_correct_mp3 from './tutor_condition/vocab_section_4/feedback_q10_correct.mp3'
import feedback_q10_wrong_mp3 from './tutor_condition/vocab_section_4/feedback_q10_wrong.mp3'
import feedback_q11_correct_mp3 from './tutor_condition/vocab_section_4/feedback_q11_correct.mp3'
import feedback_q11_wrong_mp3 from './tutor_condition/vocab_section_4/feedback_q11_wrong.mp3'
import feedback_q12_correct_mp3 from './tutor_condition/vocab_section_4/feedback_q12_correct.mp3'
import feedback_q12_wrong_mp3 from './tutor_condition/vocab_section_4/feedback_q12_wrong.mp3'
import start_teaching_4_mp3 from './tutor_condition/vocab_section_4/start_teaching_4.mp3'
import teach_dormu_mp3 from './tutor_condition/vocab_section_4/teach_dormu.mp3'
import teach_mangi_mp3 from './tutor_condition/vocab_section_4/teach_mangi.mp3'
import teach_studi_mp3 from './tutor_condition/vocab_section_4/teach_studi.mp3'
import practice_4_intro_mp3 from './tutor_condition/vocab_section_4/practice_4_intro.mp3'

const k = 1000;

function App() {

  const [robotFaceScreen, setRobotFaceScreen] = useState('black');
  const [tabletScreen, setTabletScreen] = useState(0);
  const [playAudio, setPlayAudio] = useState(null);
  const [blackScreen, setBlackScreen] = useState(false);

  const [startImgsAdiau1, setStartImgsAdiau1] = useState(false);
  const [startImgsAdiau2, setStartImgsAdiau2] = useState(false);
  const [startImgsAutomobilo, setStartImgsAutomobilo] = useState(false);
  const [startImgsBonanmatenon, setStartImgsBonanmatenon] = useState(false);
  const [startImgsDomo, setStartImgsDomo] = useState(false);
  const [startImgsDormu, setStartImgsDormu] = useState(false);
  const [startImgsGimnazio, setStartImgsGimnazio] = useState(false);
  const [startImgsMalgoja, setStartImgsMalgoja] = useState(false);
  const [startImgsMangi, setStartImgsMangi] = useState(false);
  const [startImgsSaluton1, setStartImgsSaluton1] = useState(false);
  const [startImgsSaluton2, setStartImgsSaluton2] = useState(false);
  const [startImgsStudi, setStartImgsStudi] = useState(false);

  const [imgWhatIsEsperanto, setimgWhatIsEsperanto] = useState(false);
  const [imgEnd, setImgEnd] = useState(false);

  const [imgDutch, setDutch] = useState(false);
  const [imgItaly, setItaly] = useState(false);
  const [imgGermany, setGermany] = useState(false);
  const [imgFrance, setFrance] = useState(false);

  const [imgSaluton, setImgSaluton] = useState(false);
  const [imgAdiau, setImgAdiau] = useState(false);
  const [imgAutomobilo, setImgAutomobilo] = useState(false);
  const [imgBiciklo, setImgBiciklo] = useState(false);
  const [imgBonanmatenon, setImgBonanmatenon] = useState(false);
  const [imgDomo, setImgDomo] = useState(false);
  const [imgDormu, setImgDormu] = useState(false);
  const [imgGimnazio, setImgGimnazio] = useState(false);
  const [imgGoja, setImgGoja] = useState(false);
  const [imgMalgoja, setImgMalgoja] = useState(false);
  const [imgMangi, setImgMangi] = useState(false);
  const [imgStudi, setImgStudi] = useState(false);

  const [imgQ1Q, setImgQ1Q] = useState(false);
  const [imgQ1A, setImgQ1A] = useState(false);
  const [imgQ2Q, setImgQ2Q] = useState(false);
  const [imgQ2A, setImgQ2A] = useState(false);
  const [imgQ3Q, setImgQ3Q] = useState(false);
  const [imgQ3A, setImgQ3A] = useState(false);
  const [imgQ4Q, setImgQ4Q] = useState(false);
  const [imgQ4A, setImgQ4A] = useState(false);
  const [imgQ5Q, setImgQ5Q] = useState(false);
  const [imgQ5A, setImgQ5A] = useState(false);
  const [imgQ6Q, setImgQ6Q] = useState(false);
  const [imgQ6A, setImgQ6A] = useState(false);
  const [imgQ7Q, setImgQ7Q] = useState(false);
  const [imgQ7A, setImgQ7A] = useState(false);
  const [imgQ8Q, setImgQ8Q] = useState(false);
  const [imgQ8A, setImgQ8A] = useState(false);
  const [imgQ9Q, setImgQ9Q] = useState(false);
  const [imgQ9A, setImgQ9A] = useState(false);
  const [imgQ10Q, setImgQ10Q] = useState(false);
  const [imgQ10A, setImgQ10A] = useState(false);
  const [imgQ11Q, setImgQ11Q] = useState(false);
  const [imgQ11A, setImgQ11A] = useState(false);
  const [imgQ12Q, setImgQ12Q] = useState(false);
  const [imgQ12A, setImgQ12A] = useState(false);
  const [motionCommandTopic, setMotionCommandTopic] = useState(null);
  const [faceCommandTopic, setFaceCommandTopic] = useState(null);
///////////////////////////////////////////TEACHING SECTION 2//////////////////////////////////////////

  const teachingSection2 = () => {
    var currTime = 0;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(start_teaching_2_mp3);
    }, currTime *k);

    currTime+=5;
    setTimeout(() => {
      setImgAutomobilo(true);
    }, currTime *k);
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(teach_automobilo_mp3);
    }, currTime *k);
    const motion9 = new ROSLIB.Message({
      data: "wave_left_arm"
    });
    currTime+=6.5;
    setTimeout(() => {
      motionCommandTopic.publish(motion9);
    }, currTime);
    currTime+=4.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(try_pronouncing_mp3);
    }, currTime *k);
    currTime+=1.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(automobilo_wav);
    }, currTime *k);
    currTime+=6.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(sounds_good_1_mp3);
    }, currTime *k);
    currTime+=2;
    setTimeout(() => {
      setImgAutomobilo(false);
    }, currTime *k);

//teach second word
    setTimeout(() => {
      setImgBiciklo(true);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(teach_biciklo_mp3);
    }, currTime*k);
    const motion10 = new ROSLIB.Message({
      data: "tilt_head"
    });
    currTime+=9;
    setTimeout(() => {
      motionCommandTopic.publish(motion10);
    }, currTime*k);
    const motion11 = new ROSLIB.Message({
      data: "hands_together"
    });
    setTimeout(() => {
      motionCommandTopic.publish(motion11);
    }, currTime*k);
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(try_pronouncing_mp3);
    }, currTime*k);
    currTime+=1.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(biciklo_wav);
    }, currTime*k);
    currTime+=6.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(sounds_good_2_mp3);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setImgBiciklo(false);
    }, currTime *k);

//teach third word
    setTimeout(() => {
      setImgDomo(true);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(teach_domo_mp3);
    }, currTime*k);
    const motion12 = new ROSLIB.Message({
      data: "raise_both_arms"
    });
    setTimeout(() => {
      motionCommandTopic.publish(motion12);
    }, currTime*k);
    currTime+=7;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(try_pronouncing_mp3);
    }, currTime*k);
    currTime+=1.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(domo_wav);
    }, currTime*k);
    currTime+=6.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(sounds_good_3_mp3);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setImgDomo(false);
    }, currTime *k);


//teach fourth word
    setTimeout(() => {
      setImgGimnazio(true);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(teach_gimnazio_mp3);
    }, currTime*k);
    const motion14 = new ROSLIB.Message({
      data: "tilt_head"
    });
    currTime+=4.5;
    setTimeout(() => {
      motionCommandTopic.publish(motion14);
    }, currTime*k);
    const motion15 = new ROSLIB.Message({
      data: "hands_together"
    });
    setTimeout(() => {
      motionCommandTopic.publish(motion15);
    }, currTime*k);
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(try_pronouncing_mp3);
    }, currTime*k);
    currTime+=1.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(gimnazio_wav);
    }, currTime*k);
    currTime+=6.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(sounds_good_2_mp3);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setImgGimnazio(false);
    }, currTime *k);

//practice problem
    setTimeout(() => {
      setImgQ4Q(true);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(practice_2_intro_mp3);
    }, currTime*k);
    currTime+=4;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(ask_q4_mp3);
    }, currTime*k);
    setTabletScreen(4)
  };

///////////////////////////////////////////TEACHING SECTION 3//////////////////////////////////////////
  const teachingSection3 = () => {
    var currTime = 0;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(start_teaching_3_mp3);
    }, currTime *k);

//teach first word
    currTime+=5;
    setTimeout(() => {
      setImgGoja(true);
    }, currTime *k);
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(teach_goja_mp3);
    }, currTime *k);
    const motion9 = new ROSLIB.Message({
      data: "wave_left_arm"
    });
    currTime+=6.5;
    setTimeout(() => {
      motionCommandTopic.publish(motion9);
    }, currTime);
    currTime+=4.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(try_pronouncing_mp3);
    }, currTime *k);
    currTime+=1.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(goja_wav);
    }, currTime *k);
    currTime+=6.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime *k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(sounds_good_1_mp3);
    }, currTime *k);
    currTime+=2;
    setTimeout(() => {
      setImgGoja(false);
    }, currTime *k);

//teach second word
    setTimeout(() => {
      setImgMalgoja(true);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(teach_malgoja_mp3);
    }, currTime*k);
    const motion10 = new ROSLIB.Message({
      data: "tilt_head"
    });
    currTime+=10;
    setTimeout(() => {
      motionCommandTopic.publish(motion10);
    }, currTime*k);
    const motion11 = new ROSLIB.Message({
      data: "hands_together"
    });
    setTimeout(() => {
      motionCommandTopic.publish(motion11);
    }, currTime*k);
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(try_pronouncing_mp3);
    }, currTime*k);
    currTime+=1.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(malgoja_wav);
    }, currTime*k);
    currTime+=6.5;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(sounds_good_2_mp3);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setImgMalgoja(false);
    }, currTime *k);

//practice problem
    setTimeout(() => {
      setImgQ8Q(true);
    }, currTime*k);
    currTime+=2;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(practice_3_intro_mp3);
    }, currTime*k);
    currTime+=4;
    setTimeout(() => {
      setPlayAudio(null);
    }, currTime*k);
    currTime+=0.5;
    setTimeout(() => {
      setPlayAudio(ask_q8_mp3);
    }, currTime*k);
    setTabletScreen(5)
  };

///////////////////////////////////////////TEACHING SECTION 4//////////////////////////////////////////

const teachingSection4 = () => {
  var currTime = 0;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime *k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(start_teaching_4_mp3);
  }, currTime *k);
  currTime+=5;

//teach first word
  setTimeout(() => {
    setImgStudi(true);
  }, currTime *k);
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime *k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(teach_studi_mp3);
  }, currTime *k);
  currTime+=2;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime *k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(studi_wav);
  }, currTime *k);
  const motion9 = new ROSLIB.Message({
    data: "wave_left_arm"
  });
  setTimeout(() => {
    motionCommandTopic.publish(motion9);
  }, currTime);
  currTime+=2;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime *k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(try_pronouncing_mp3);
  }, currTime *k);
  currTime+=1.5;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime *k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(studi_wav);
  }, currTime *k);
  currTime+=6.5;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime *k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(sounds_good_1_mp3);
  }, currTime *k);
  currTime+=2;
  setTimeout(() => {
    setImgStudi(false);
  }, currTime *k);

//teach second word
  setTimeout(() => {
    setImgMangi(true);
  }, currTime*k);
  currTime+=2;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(teach_mangi_mp3);
  }, currTime*k);
  const motion10 = new ROSLIB.Message({
    data: "tilt_head"
  });
  currTime+=7;
  setTimeout(() => {
    motionCommandTopic.publish(motion10);
  }, currTime*k);
  const motion11 = new ROSLIB.Message({
    data: "hands_together"
  });
  setTimeout(() => {
    motionCommandTopic.publish(motion11);
  }, currTime*k);
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(try_pronouncing_mp3);
  }, currTime*k);
  currTime+=1.5;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(mangi_wav);
  }, currTime*k);
  currTime+=6.5;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(sounds_good_2_mp3);
  }, currTime*k);
  currTime+=2;
  setTimeout(() => {
    setImgMangi(false);
  }, currTime *k);

//teach third word
  setTimeout(() => {
    setImgDormu(true);
  }, currTime*k);
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime *k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(dormu_wav);
  }, currTime *k);
  currTime+=1;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(teach_dormu_mp3);
  }, currTime*k);
  const motion12 = new ROSLIB.Message({
    data: "raise_both_arms"
  });
  setTimeout(() => {
    motionCommandTopic.publish(motion12);
  }, currTime*k);
  currTime+=7;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(try_pronouncing_mp3);
  }, currTime*k);
  currTime+=1.5;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(dormu_wav);
  }, currTime*k);
  currTime+=6.5;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(sounds_good_3_mp3);
  }, currTime*k);
  currTime+=2;
  setTimeout(() => {
    setImgDormu(false);
  }, currTime *k);

//practice problem
  setTimeout(() => {
    setImgQ10Q(true);
  }, currTime*k);
  currTime+=2;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(practice_4_intro_mp3);
  }, currTime*k);
  currTime+=4;
  setTimeout(() => {
    setPlayAudio(null);
  }, currTime*k);
  currTime+=0.5;
  setTimeout(() => {
    setPlayAudio(ask_q10_mp3);
  }, currTime*k);
  setTabletScreen(6)
};

  useEffect(() => {
    const ros = new ROSLIB.Ros({
      url: 'ws://127.0.0.1:9090'
    });
    setMotionCommandTopic(new ROSLIB.Topic({ ros, name: 'motion_command_topic', messageType: 'std_msgs/String' }));
    setFaceCommandTopic(new ROSLIB.Topic({
      ros,
      name: 'face_command_topic',
      messageType: 'std_msgs/String'
    }));    
    ros.on('connection', function () {
      console.log('Connected to websocket server.');
    });

    ros.on('error', function (error) {
      console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function () {
      console.log('Connection to websocket server closed.');
    });

    return () => {
      ros.close();
      <div>
        <App tabletScreen={tabletScreen} />
      </div>
    };
  }, []);

  // useEffect(() => {

  //   const intervalId = setInterval(() => {
  //     const faces = isHappy ? happy_faces : smile_faces;
  //     setFaceIndex((faceIndex) => (faceIndex + 1) % faces.length);
  //   }, 300);

  //   return () => clearInterval(intervalId);
  // }, [isHappy, faceIndex, flagIndex, isFace]);

  // useEffect(() => {
  //   const feedbackPlayer = new Audio();
  //   const countryPlayer = new Audio();
  //   const introPlayer = new Audio();
  //   const startPlayer = new Audio();
  //   const endPlayer = new Audio();
  //   const askPlayer = new Audio();

  //   if (audioCase === 0) {
  //     feedbackPlayer.src = CorrectAudio;
  //     feedbackPlayer.play();
  //     feedbackPlayer.onended = function () {
  //       feedbackPlayer.pause();
  //     };
  //     setTimeout(() => {
  //       countryPlayer.src = CountryAudios[flagIndex];
  //       countryPlayer.play();
  //       countryPlayer.onended = function () {
  //         countryPlayer.pause();
  //       };
  //     }, 2500);
  //     setAudioCase(-1);
  //   } else if (audioCase === 1) {
  //     feedbackPlayer.src = IncorrectAudio;
  //     feedbackPlayer.play();
  //     feedbackPlayer.onended = function () {
  //       feedbackPlayer.pause();
  //     };
  //     setTimeout(() => {
  //       countryPlayer.src = CountryAudios[flagIndex];
  //       countryPlayer.play();
  //       countryPlayer.onended = function () {
  //         countryPlayer.pause();
  //       };
  //     }, 2500);
  //     setAudioCase(-1);
  //   } else if (audioCase === 2) {
  //     introPlayer.src = IntroAudio;
  //     introPlayer.play();
  //     introPlayer.onended = function () {
  //       introPlayer.pause();
  //     };
  //     setTimeout(() => {
  //       startPlayer.src = StartAudio;
  //       startPlayer.play();
  //       startPlayer.onended = function () {
  //         startPlayer.pause();
  //       };
  //     }, 10000);
  //     setAudioCase(-1);
  //   } else if (audioCase === 3) {
  //     endPlayer.src = EndAudio;
  //     endPlayer.play();
  //     endPlayer.onended = function () {
  //       endPlayer.pause();
  //     };
  //     setAudioCase(-1);
  //   } else if (audioCase === 4) {
  //     askPlayer.src = AskAudio;
  //     askPlayer.play();
  //     askPlayer.onended = function () {
  //       askPlayer.pause();
  //     };
  //     setAudioCase(-1);
  //   }
  // }, [audioCase]);

  // const faces = isHappy ? happy_faces : smile_faces;

  // return <img src={isFace ? faces[faceIndex] : flags[flagIndex]} style={{ width: '100%', height: 'auto' }} />;
  return (
    <div>
      {tabletScreen === 0 && (
        <>
          <img style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }} src={start_learning} alt="Start Learning" />
          <button
            style={{
              position: 'absolute',
              top: '60%',
              left: '50%',
              width: '400px',
              height: '100px',
              transform: 'translate(-50%, -50%)',
              opacity: 0,
            }}
            onClick={() => {
              setTabletScreen(1)
              const motion1 = new ROSLIB.Message({
                data: "maple_pow_on"
              });
              motionCommandTopic.publish(motion1);
              const face1 = new ROSLIB.Message({
                data: "blinking"
              });
              faceCommandTopic.publish(face1);
              const motion2 = new ROSLIB.Message({
                data: "wave_left_arm"
              });
              motionCommandTopic.publish(motion2);
              var currTime = 3;
              
              setTimeout(() => {
                setPlayAudio(maple_self_intro_mp3);
              }, currTime *k);
              currTime += 9;
              setTimeout(() => {
                setBlackScreen(true);
              }, currTime *k);
              currTime += 6;
              setTimeout(() => {
                faceCommandTopic.publish(face2);
              }, currTime *k);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);  
              currTime += 2;
              setTimeout(() => {
                setTabletScreen(2);
              }, currTime *k);
              const face2 = new ROSLIB.Message({
                data: "smile"
              });
              setTimeout(() => {
                setBlackScreen(false);
              }, currTime *k);
              setTimeout(() => {
                setPlayAudio(lesson_run_down_mp3);
              }, currTime *k);
              const motion3 = new ROSLIB.Message({
                data: "look_down"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion3);
              }, currTime *k);
              setTimeout(() => {
                setStartImgsAdiau1(true);
              }, currTime *k);
              setTimeout(() => {
                setStartImgsAdiau2(true);
              }, currTime *k);
              currTime +=1;
              setTimeout(() => {
                setStartImgsAutomobilo(true);
              }, currTime *k);
              currTime +=1;
              setTimeout(() => {
                setStartImgsBonanmatenon(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsDomo(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsDormu(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsGimnazio(true);
              }, currTime *k);
              const motion4 = new ROSLIB.Message({
                data: "point_down"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion4);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsMalgoja(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsMangi(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsSaluton1(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsSaluton2(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsStudi(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setStartImgsAdiau1(false);
                setStartImgsAdiau2(false);
                setStartImgsAutomobilo(false);
                setStartImgsBonanmatenon(false);
                setStartImgsDomo(false);
                setStartImgsDormu(false);
                setStartImgsGimnazio(false);
                setStartImgsMalgoja(false);
                setStartImgsMangi(false);
                setStartImgsSaluton1(false);
                setStartImgsSaluton2(false);
                setStartImgsStudi(false);
              }, currTime *k);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              const motion5 = new ROSLIB.Message({
                data: "head_tilt"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion5);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(esperanto_1_mp3);
              }, currTime *k);
              const motion6 = new ROSLIB.Message({
                data: "question_hands"
              });
              currTime+=2
              setTimeout(() => {
                motionCommandTopic.publish(motion6);
              }, currTime *k);
              setTimeout(() => {
                setimgWhatIsEsperanto(true);
              }, currTime *k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(esperanto_2_mp3);
              }, currTime *k);
              const motion7 = new ROSLIB.Message({
                data: "raise_both_Arms"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion7);
              }, currTime *k);
              currTime+=0.5;
              const motion8 = new ROSLIB.Message({
                data: "hands_together"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion8);
              }, currTime *k);
              currTime+=4;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(esperanto_3_mp3);
              }, currTime *k);
              setTimeout(() => {
                setimgWhatIsEsperanto(false);
              }, currTime *k);
              currTime+=3.5;
              setTimeout(() => {
                setFrance(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setItaly(true);
              }, currTime *k);
              currTime+=3.5;
              setTimeout(() => {
                setGermany(true);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setDutch(true);
              }, currTime *k);
              currTime+=1;
              setTimeout(() => {
                setItaly(false);
                setGermany(false);
                setDutch(false);
                setFrance(false);
              }, currTime *k);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(start_teaching_1_mp3);
              }, currTime *k);

//teach first word
              currTime+=5;
              setTimeout(() => {
                setImgSaluton(true);
              }, currTime *k);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(teach_saluton_1_mp3);
              }, currTime *k);
              const motion9 = new ROSLIB.Message({
                data: "wave_left_arm"
              });
              currTime+=4.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion9);
              }, currTime);
              currTime+=3;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(teach_saluton_2_mp3);
              }, currTime *k);
              currTime+=4.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(try_pronouncing_mp3);
              }, currTime *k);
              currTime+=1.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(saluton_wav);
              }, currTime *k);
              currTime+=6.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime *k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(sounds_good_1_mp3);
              }, currTime *k);
              currTime+=2;
              setTimeout(() => {
                setImgSaluton(false);
              }, currTime *k);

//teach second word
              setTimeout(() => {
                setImgAdiau(true);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(teach_adiau_1_mp3);
              }, currTime*k);
              const motion10 = new ROSLIB.Message({
                data: "tilt_head"
              });
              currTime+=4.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion10);
              }, currTime*k);
              const motion11 = new ROSLIB.Message({
                data: "hands_together"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion11);
              }, currTime*k);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(teach_adiau_2_mp3);
              }, currTime*k);
              currTime+=4.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(try_pronouncing_mp3);
              }, currTime*k);
              currTime+=1.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(adiau_wav);
              }, currTime*k);
              currTime+=6.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(sounds_good_2_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgAdiau(false);
              }, currTime *k);

//teach third word
              setTimeout(() => {
                setImgBonanmatenon(true);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(teach_bonanmatenon_1_mp3);
              }, currTime*k);
              const motion12 = new ROSLIB.Message({
                data: "raise_both_arms"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion12);
              }, currTime*k);
              currTime+=17.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(try_pronouncing_mp3);
              }, currTime*k);
              currTime+=1.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(bonanmatenon_wav);
              }, currTime*k);
              currTime+=6.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(sounds_good_3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgBonanmatenon(false);
              }, currTime *k);

//practice problem
            setTimeout(() => {
              setImgQ1Q(true);
            }, currTime*k);
            currTime+=2;
            setTimeout(() => {
              setPlayAudio(null);
            }, currTime*k);
            currTime+=0.5;
            setTimeout(() => {
              setPlayAudio(practice_1_intro_mp3);
            }, currTime*k);
            currTime+=4;
            setTimeout(() => {
              setPlayAudio(null);
            }, currTime*k);
            currTime+=0.5;
            setTimeout(() => {
              setPlayAudio(ask_q1_mp3);
            }, currTime*k);
            }}
            
          >
            button to be made transparent
          </button>
        </>
      )}

      {playAudio && (
        <audio autoPlay>
          <source src={playAudio}/>
        </audio>
      )}

      {blackScreen && (
        <img style={{
          minWidth: '100%',
          minHeight: '100%',
        }} src={black_screen} alt="black" />
      )}
      
      {startImgsAdiau2 && (
        <img style={{
          position: 'absolute',
          maxWidth: '30%',
          maxHeight: '30%',
          left: '60%',
          top: '5%'
        }} src={graphic_adiau2} alt="" />
      )}
      {startImgsAutomobilo && (
        <img style={{
          position: 'absolute',
          maxWidth: '25%',
          maxHeight: '25%',
          right: '0%',
          top: '40%'
        }} src={graphic_automobilo} alt="" />
      )}
      {startImgsBonanmatenon && (
        <img style={{
          position: 'absolute',
          maxWidth: '30%',
          maxHeight: '30%',
          top: '30%',
        }} src={graphic_bonanmatenon} alt="" />
      )}
      {startImgsDomo && (
        <img style={{
          position: 'absolute',
          maxWidth: '40%',
          maxHeight: '40%',
          top: '60%',
        }} src={graphic_domo} alt="" />
      )}
      {startImgsGimnazio && (
        <img style={{
          position: 'absolute',
          maxWidth: '30%',
          maxHeight: '30%',
        }} src={graphic_gimnazio} alt="" />
      )}
      {startImgsMalgoja && (
        <img style={{
          position: 'absolute',
          maxWidth: '25%',
          maxHeight: '25%',
          left: '60%',
          bottom:'0%',
        }} src={graphic_malgoja} alt="" />
      )}
      {startImgsSaluton1 && (
        <img style={{
          position: 'absolute',
          maxWidth: '40%',
          maxHeight: '40%',
          left: '35%',
        }} src={graphic_saluton} alt="" />
      )}
      {startImgsSaluton2 && (
        <img style={{
          position: 'absolute',
          maxWidth: '30%',
          maxHeight: '30%',
          right: '0%',
          bottom:'0%',
        }} src={graphic_saluton2} alt="" />
      )}
      {startImgsStudi && (
        <img style={{
          position: 'absolute',
          maxWidth: '30%',
          maxHeight: '30%',
          left: '30%',
          bottom:'0%',
        }} src={graphic_studi} alt="" />
      )}
      {startImgsDormu && (
        <img style={{
          position: 'absolute',
          maxWidth: '30%',
          maxHeight: '30%',
          right: '25%',
          top:'40%'
        }} src={graphic_dormu} alt="" />
      )}
      {startImgsMangi && (
        <img style={{
          position: 'absolute',
          maxWidth: '35%',
          maxHeight: '35%',
          left: '23%',
          top:'35%',
        }} src={graphic_mangi} alt="" />
      )}
      {startImgsAdiau1 && (
        <img style={{
          position: 'absolute',
          maxWidth: '40%',
          maxHeight: '40%',
          right: '0%',
        }} src={graphic_adiau1} alt="" />
      )}


      {imgFrance && (
        <img style={{
          position: 'absolute',
          maxWidth: '35%',
          maxHeight: '35%',
          right: '10%',
          top:'20%',
        }} src={france} alt="" />
      )}
      {imgItaly && (
        <img style={{
          position: 'absolute',
          maxWidth: '35%',
          maxHeight: '35%',
          left: '40%',
          bottom:'0%',
        }} src={italy} alt="" />
      )}
      {imgGermany && (
        <img style={{
          position: 'absolute',
          maxWidth: '35%',
          maxHeight: '35%',
          left: '20%',
          top:'10%',
        }} src={germany} alt="" />
      )}
      {imgDutch && (
        <img style={{
          position: 'absolute',
          maxWidth: '35%',
          maxHeight: '35%',
          left: '0%',
          top:'40%',
        }} src={dutch} alt="" />
      )}

      {imgWhatIsEsperanto && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
        }} src={what_is_esperanto} alt="" />
      )}

      {imgAdiau && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={adiau} alt="" />
      )}
      {imgAutomobilo && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={automobilo} alt="" />
      )}
      {imgBiciklo && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={biciklo} alt="" />
      )}
      {imgBonanmatenon && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={bonanmatenon} alt="" />
      )}
      {imgDomo && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={domo} alt="" />
      )}
      {imgDormu && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={dormu} alt="" />
      )}
      {imgGimnazio && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={gimnazio} alt="" />
      )}
      {imgGoja && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={goja} alt="" />
      )}
      {imgMalgoja && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={malgoja} alt="" />
      )}
      {imgMangi && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={mangi} alt="" />
      )}
      {imgSaluton && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={saluton} alt="" />
      )}
      {imgStudi && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
          maxHeight: '100%',
        }} src={studi} alt="" />
      )}
      {imgEnd && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={end} alt="" />
      )}

{/* ////////////////////////////////////// Question 1 page ////////////////////////////////////// */}
      {imgQ1Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
          }} src={q1Q} alt="" />
{/* button 1 correct */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ1Q(false);
                setImgQ1A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q1_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "happy"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(saluton_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v1_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ1A(false);
                setImgQ2Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q2_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ1Q(false);
              setImgSaluton(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q1_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "sad"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(saluton_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgSaluton(false);
                setImgQ1A(true);
                setPlayAudio(next_q_v1_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ1A(false);
                setImgQ2Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q2_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 wrong*/}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ1Q(false);
              setImgSaluton(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q1_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "sad"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(saluton_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgSaluton(false);
                setImgQ1A(true);
                setPlayAudio(next_q_v1_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ1A(false);
                setImgQ2Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q2_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}
      {imgQ1A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q1A} alt="" />
      )}

{/* ////////////////////////////////////// Question 2 page ////////////////////////////////////// */}
      {imgQ2Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q2Q} alt="" />
{/* button 1 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ2Q(false);
              setImgAdiau(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q2_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=7;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(adiau_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgAdiau(false);
                setImgQ2A(true);
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ2A(false);
                setImgQ3Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q3_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ2Q(false);
              setImgAdiau(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q2_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=7;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(adiau_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgAdiau(false);
                setImgQ2A(true);
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ2A(false);
                setImgQ3Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q3_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 correct*/}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}

            onClick={() => {
              setImgQ2Q(false);
              setImgQ2A(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q2_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=7;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(adiau_wav);
              }, currTime*k);
              currTime+=1;
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ2A(false);
                setImgQ3Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q3_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>

{/* button 4 */}
        <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(saluton_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 5 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '40%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(adiau_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 6 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(bonanmatenon_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}
      {imgQ2A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q2A} alt="" />
      )}

{/* ////////////////////////////////////// Question 3 page ////////////////////////////////////// */}
      {imgQ3Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q3Q} alt="" />

{/* button 1 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}

            onClick={() => {
              setImgQ3Q(false);
              setImgBonanmatenon(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q3_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(bonanmatenon_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgBonanmatenon(false);
                setImgQ3A(true);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ3A(false);
                teachingSection2();
                setTabletScreen(2);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ3Q(false);
              setImgBonanmatenon(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q3_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(bonanmatenon_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgBonanmatenon(false);
                setImgQ3A(true);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ3A(false);
                setTabletScreen(2);
                teachingSection2();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 correct */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ3Q(false);
                setImgQ3A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q3_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "smile"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(bonanmatenon_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ3A(false);
                setTabletScreen(2);
                teachingSection2();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}
      {imgQ3A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q3A} alt="" />
      )}

{/* ////////////////////////////////////// Question 4 page ////////////////////////////////////// */}
      {imgQ4Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q4Q} alt="" />
          
{/* button 1 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ4Q(false);
              setImgAutomobilo(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q4_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(automobilo_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgAutomobilo(false);
                setImgQ4A(true);
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ4A(false);
                setImgQ5Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q5_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}

            onClick={() => {
              setImgQ4Q(false);
              setImgAutomobilo(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q4_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(automobilo_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgAutomobilo(false);
                setImgQ4A(true);
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ4A(false);
                setImgQ5Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q5_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 correct */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ4Q(false);
                setImgQ4A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q4_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "smile"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(automobilo_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ4A(false);
                setImgQ5Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q5_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}

      {imgQ4A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q4A} alt="" />
      )}

{/* ////////////////////////////////////// Question 5 page ////////////////////////////////////// */}
      {imgQ5Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q5Q} alt="" />

{/* button 1 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ5Q(false);
              setImgBiciklo(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q5_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(biciklo_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgAdiau(false);
                setImgQ5A(true);
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ5A(false);
                setImgQ6Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q6_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}

            onClick={() => {
              setImgQ5Q(false);
              setImgBiciklo(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q5_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(biciklo_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgAdiau(false);
                setImgQ5A(true);
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ5A(false);
                setImgQ6Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q6_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>

{/* button 3 correct*/}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ5Q(false);
              setImgQ5A(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q5_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              currTime+=5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(biciklo_wav);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ5A(false);
                setImgQ6Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q6_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>

{/* button 4 */}
        <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(gimnazio_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 5 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '40%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(automobilo_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 6 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(biciklo_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}

      {imgQ5A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q5A} alt="" />
      )}

{/* ////////////////////////////////////// Question 6 page ////////////////////////////////////// */}
      {imgQ6Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q6Q} alt="" />
          {/* button 1 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ6Q(false);
              setImgGimnazio(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q6_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=7;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(gimnazio_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgGimnazio(false);
                setImgQ6A(true);
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ6A(false);
                setImgQ7Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q7_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 correct */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ6Q(false);
              setImgQ6A(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q6_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              currTime+=5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(gimnazio_wav);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ6A(false);
                setImgQ7Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q7_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>

{/* button 3 wrong*/}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}

            onClick={() => {
              setImgQ6Q(false);
              setImgQ6A(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q6_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              currTime+=5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(gimnazio_wav);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ6A(false);
                setImgQ7Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q7_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>

{/* button 4 */}
        <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(automobilo_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 5 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '40%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(gimnazio_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 6 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(domo_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}

      {imgQ6A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q6A} alt="" />
      )}

{/* ////////////////////////////////////// Question 7 page ////////////////////////////////////// */}
      {imgQ7Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q7Q} alt="" />

{/* button 1 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ7Q(false);
              setImgDomo(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q7_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(domo_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgDomo(false);
                setImgQ7A(true);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ7A(false);
                teachingSection3();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 correct */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}

            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ7Q(false);
                setImgQ7A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q7_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "smile"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(domo_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ7A(false);
                teachingSection3();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ7Q(false);
              setImgDomo(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q7_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(domo_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgDomo(false);
                setImgQ7A(true);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ7A(false);
                teachingSection3();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}
      {imgQ7A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q7A} alt="" />
      )}

{/* ////////////////////////////////////// Question 8 page ////////////////////////////////////// */}

      {imgQ8Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q8Q} alt="" />

{/* button 1 correct */}
        <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ8Q(false);
                setImgQ8A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q8_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "smile"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(goja_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ8A(false);
                setImgQ9Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q9_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ8Q(false);
              setImgGoja(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q8_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(goja_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgGoja(false);
                setImgQ8A(true);
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ8A(false);
                setImgQ9Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q9_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ8Q(false);
              setImgGoja(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q8_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(goja_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgGoja(false);
                setImgQ8A(true);
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ8A(false);
                setImgQ9Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q9_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}
      {imgQ8A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q8A} alt="" />
      )}

{/* ////////////////////////////////////// Question 9 page ////////////////////////////////////// */}

      {imgQ9Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q9Q} alt="" />

{/* button 1 wrong */}
        <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ9Q(false);
              setImgMalgoja(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q9_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=7;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(malgoja_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgMalgoja(false);
                setImgQ9A(true);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ9A(false);
                teachingSection4();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ9Q(false);
              setImgMalgoja(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q9_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=7;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(malgoja_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgMalgoja(false);
                setImgQ9A(true);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ9A(false);
                teachingSection4();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 correct */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ9Q(false);
                setImgQ9A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q9_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "happy"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(malgoja_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ9A(false);
                teachingSection4();
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>

{/* button 4 */}
        <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(goja_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 5 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '40%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(bonanmatenon_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 6 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(malgoja_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}

      {imgQ9A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q9A} alt="" />
      )}

{/* ////////////////////////////////////// Question 10 page ////////////////////////////////////// */}

      {imgQ10Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
            minHeight: '100%',
          }} src={q10Q} alt="" />

{/* button 1 wrong */}
        <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ10Q(false);
              setImgStudi(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q10_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=7;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "sad"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(studi_wav);
              }, currTime*k);
              currTime+=1;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgStudi(false);
                setImgQ10A(true);
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ10A(false);
                setImgQ11Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q11_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 corret */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ10Q(false);
              setImgQ10A(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q10_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=8;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(studi_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v3_mp3);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgQ10A(false);
                setImgQ11Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q11_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 wrong*/}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}

          >
            button to be made transparent
          </button>

{/* button 4 */}
        <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '5%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(mangi_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 5 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '40%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(studi_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 6 */}
          <button
            style={{
              position: 'absolute',
              bottom: '5%',
              right: '20%',
              width: '10%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(dormu_wav);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}

      {imgQ10A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q10A} alt="" />
      )}

{/* ////////////////////////////////////// Question 11 page ////////////////////////////////////// */}

      {imgQ11Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
          }} src={q11Q} alt="" />

{/* button 1 wrong */}
        <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ11Q(false);
              setImgDormu(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q11_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(dormu_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgDormu(false);
                setImgQ11A(true);
                setPlayAudio(next_q_v1_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ11A(false);
                setImgQ12Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q12_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ11Q(false);
              setImgDormu(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q11_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=5.5;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(dormu_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setImgDormu(false);
                setImgQ11A(true);
                setPlayAudio(next_q_v1_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ11A(false);
                setImgQ12Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q12_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 correct */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ11Q(false);
                setImgQ11A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q11_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "smile"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(dormu_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(next_q_v2_mp3);
              }, currTime*k);
              currTime+=3;
              setTimeout(() => {
                setImgQ11A(false);
                setImgQ12Q(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(ask_q12_mp3);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}
      {imgQ11A && (
        <img style={{
          position: 'absolute',
          minWidth: '100%',
          minHeight: '100%',
        }} src={q11A} alt="" />
      )}

{/* ////////////////////////////////////// Question 12 page ////////////////////////////////////// */}

      {imgQ12Q && (
        <div>
          <img style={{
            position: 'absolute',
            minWidth: '100%',
          }} src={q12Q} alt="" />
          
{/* button 1 correct */}
        <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '5%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setImgQ12Q(false);
                setImgQ12A(true);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q12_correct_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "raise_both_hands"
              });
              currTime+=3;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "happy"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
              }, currTime*k);
              currTime+=2.5;
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(mangi_wav);
              }, currTime*k);
              currTime+=3;
              const motion3 = new ROSLIB.Message({
                data: "raise_both_arms"
              });
              setTimeout(() => {
                setImgQ12A(false);
                setImgEnd(true);
                setPlayAudio(null);
                motionCommandTopic.publish(motion3);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(end_lesson_mp3);
              }, currTime*k);
              currTime+=4;
              const motion4 = new ROSLIB.Message({
                data: "raise_both_arms"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion4);
              }, currTime*k);
              currTime+=4;
              const motion5 = new ROSLIB.Message({
                data: "maple_pow_off"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion5);
              }, currTime*k);
              currTime+=4;
              const face2 = new ROSLIB.Message({
                data: "black"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face2);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 2 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              left: '40%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}

            onClick={() => {
              setImgQ12Q(false);
              setImgMangi(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q12_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=6;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(mangi_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgMangi(false);
                setImgQ12A(true);
              }, currTime*k);
              currTime+=3;
              const motion3 = new ROSLIB.Message({
                data: "raise_both_arms"
              });
              setTimeout(() => {
                setImgQ12A(false);
                setImgEnd(true);
                setPlayAudio(null);
                motionCommandTopic.publish(motion3);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(end_lesson_mp3);
              }, currTime*k);
              currTime+=4;
              const motion4 = new ROSLIB.Message({
                data: "raise_both_arms"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion4);
              }, currTime*k);
              currTime+=4;
              const motion5 = new ROSLIB.Message({
                data: "maple_pow_off"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion5);
              }, currTime*k);
              currTime+=4;
              const face2 = new ROSLIB.Message({
                data: "black"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face2);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
{/* button 3 wrong */}
          <button
            style={{
              position: 'absolute',
              bottom: '0%',
              right: '0%',
              width: '30%',
              height: '20%',
              opacity: 0,
            }}
            onClick={() => {
              setImgQ12Q(false);
              setImgMangi(true);
              var currTime = 0;
              const motion1 = new ROSLIB.Message({
                data: "look_down"
              });
              motionCommandTopic.publish(motion1);
              setTimeout(() => {
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(feedback_q12_wrong_mp3);
              }, currTime*k);
              const motion2 = new ROSLIB.Message({
                data: "head_arms_down"
              });
              currTime+=6;
              setTimeout(() => {
                motionCommandTopic.publish(motion2);
              }, currTime*k);
              const face = new ROSLIB.Message({
                data: "blinking"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face);
                setPlayAudio(null);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(mangi_wav);
              }, currTime*k);
              currTime+=2;
              setTimeout(() => {
                setImgMangi(false);
                setImgQ12A(true);
              }, currTime*k);
              currTime+=3;
              const motion3 = new ROSLIB.Message({
                data: "raise_both_arms"
              });
              setTimeout(() => {
                setImgQ12A(false);
                setImgEnd(true);
                setPlayAudio(null);
                motionCommandTopic.publish(motion3);
              }, currTime*k);
              currTime+=0.5;
              setTimeout(() => {
                setPlayAudio(end_lesson_mp3);
              }, currTime*k);
              currTime+=4;
              const motion4 = new ROSLIB.Message({
                data: "wave_left_arm"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion4);
              }, currTime*k);
              currTime+=4;
              const motion5 = new ROSLIB.Message({
                data: "maple_pow_off"
              });
              setTimeout(() => {
                motionCommandTopic.publish(motion5);
              }, currTime*k);
              currTime+=4;
              const face2 = new ROSLIB.Message({
                data: "black"
              });
              setTimeout(() => {
                faceCommandTopic.publish(face2);
              }, currTime*k);
            }}
          >
            button to be made transparent
          </button>
        </div>
      )}
      {imgQ12A && (
        <img style={{
          position: 'absolute',
          maxWidth: '100%',
        }} src={q12A} alt="" />
      )}
    </div>
  );
}

export default App;