import React from 'react';
import { View, ListView, StyleSheet, Text, AsyncStorage } from 'react-native';




import Row from './Row'
import demoData from './data'
import Contact from './Contact'



global.contactos = [];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 360,
  },
});



class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);


    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(demoData);

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
      data:{},
    }

  }

  componentDidMount(){

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData
    });

    AsyncStorage.getItem('cs').then((value) => {
      contactos = "["+value+"]";
      contactos = JSON.parse(contactos);

      const { dataBlob, sectionIds, rowIds } = this.formatData(contactos);

      this.state = {
        dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
      }

    });
  }

  formatData(data) {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];
    for (let sectionId = 0; sectionId < alphabet.length; sectionId++) {
      const currentChar = alphabet[sectionId];
      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar) === 0);
      if (users.length > 0) {
        sectionIds.push(sectionId);
        dataBlob[sectionId] = { character: currentChar };
        rowIds.push([]);
        for (let i = 0; i < users.length; i++) {
          const rowId = `${sectionId}:${i}`;
          rowIds[rowIds.length - 1].push(rowId);
          dataBlob[rowId] = users[i];
        }
      }
    }
    return { dataBlob, sectionIds, rowIds };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
      />
    );
  }
}

export default ListViewDemo;
