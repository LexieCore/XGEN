import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Launch from './components/Launch';
import Register from './components/Register';
import Login from './components/Login';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  ActionConst,
} from 'react-native-router-flux';
import Error from './components/Error';
import Home from './components/Home';
import TabView from './components/TabView';
import TabIcon from './components/TabIcon';
import EchoView from './components/EchoView';
import Contact from './components/Contact'
import Contact2 from './components/Contact2'
import NavigationDrawer from './components/NavigationDrawer';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new defaultReducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

let currentSwitchPage = 'text1';

const SwitcherPage = (props) => (
  <View>
    <Text style={{ marginTop: 100, textAlign: 'center' }}>current page: {props.text}</Text>
    <Button
      onPress={() => {
        currentSwitchPage = currentSwitchPage === 'text1' ? 'text2' : 'text1';
        Actions.refresh({ key: 'switcher' });
      }}
    >
      Switch!
    </Button>
    <Button
      onPress={() => {
        Actions.launch({ type: ActionConst.RESET });
      }}
    >
      Exit
    </Button>
  </View>
);

class Xgen extends Component {
  render() {
    return (
      <Router creatReducer={reducerCreate} getSceneStyle={getSceneStyle}>
        <Scene key="modal" component={Modal}>
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="echo" clone component={EchoView} getTitle={(navState) => navState.key} />
            <Scene
              key="switcher"
              component={Switch}
              selector={() => { return 'text1'; }}>
              <Scene
                key="text1"
                text="text1"
                component={(props) => <SwitcherPage
                  {...props}
                  text={currentSwitchPage}
                />}
              />
              <Scene
                key="text2"
                text="text2"
                component={(props) => <SwitcherPage
                  {...props}
                  text={currentSwitchPage}
                />}
              />
            </Scene>
            <Scene key="register" component={Register} title="Register" />
            <Scene key="register2" component={Register} title="Register2" duration={1} />
            <Scene key="home" component={Home} title="Replace" type={ActionConst.REPLACE} />
            <Scene key="launch" component={Launch} title="Launch" />
            <Scene key="login" direction="vertical" >
              <Scene key="loginModal" direction="vertical" component={Login} title="Login" />
              <Scene
                key="loginModal2"
                hideNavBar
                component={Login2}
                title="Login2"
                panHandlers={null}
                duration={1}
              />
              <Scene
                key="loginModal3"
                hideNavBar
                component={Login3}
                title="Login3"
                panHandlers={null}
                duration={1}
              />
            </Scene>




            <Scene key="tabbar" component={NavigationDrawer} initial>
              <Scene
                key="main"
                tabs
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              >
                <Scene
                  key="tab1"
                  title="Contactos"
                  icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: '#55dc5b' }}
                  titleStyle={{ color: 'white' }}
                >
                  <Scene
                    key="tab1_1"
                    component={TabView}
                    title="Contactos"
                    onRight={() =>  Actions.tab3() }
                    rightTitle="Add"
                  />
                </Scene>
                <Scene
                  key="tab2"
                  title="Grupos"
                  icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: '#55dc5b' }}
                  titleStyle={{ color: 'white' }}
                >
                  <Scene
                    key="tab2_1"
                    component={TabView}
                    title="Grupos"
                    onRight={() => alert('Right button')}
                    rightTitle="Right"
                  />
                </Scene>
                <Scene
                  key="tab3"
                  title="Anadir Contacto"
                  navigationBarStyle={{ backgroundColor: '#55dc5b' }}
                  titleStyle={{ color: 'white' }}
                >
                <Scene
                  key="tab3_1"
                  component={Contact2}
                  title="Anadir Contacto "
                />
                </Scene>
              </Scene>
            </Scene>
          </Scene>
          <Scene key="error" component={Error} />
        </Scene>
      </Router>
    );
  }
}

export default Xgen;
