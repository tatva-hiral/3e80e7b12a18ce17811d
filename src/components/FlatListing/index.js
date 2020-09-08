import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import ThreeDotLoader from '../../components/ThreeDotLoader';
import displayStyles from '../../theme/displayStyles';
import {defaultColors} from '../../theme/color';
import typography from '../../theme/typography';
import spacing from '../../theme/spacing';
import styles from './styles';

class FlatListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d727',
          title: 'Third Item',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6653',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d7256',
          title: 'Third Item',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53325446abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91a35a97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e3529d72',
          title: 'Third Item',
        },
      ],
    };
  }

  renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          key={'index_' + index}
          style={styles.itemContainer}
          onPress={() => {}}>
          <View style={styles.row}>
            <Text style={styles.textlabel}>{'Title: '}</Text>
            <Text style={styles.textValue}>{item.title}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.textlabel}>{'Url: '}</Text>
            <Text style={styles.textValue}>{item.id}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator} />
      </>
    );
  };

  renderEmptyComponent = () => {
    return (
      <View style={[displayStyles.centered, spacing.pv3]}>
        <Text style={[typography.bodyLarge, spacing.mt3]}>
          No List Available.
        </Text>
        <ThreeDotLoader
          size={11}
          activeBackground={defaultColors.fullBlack}
          background={defaultColors.fullBlack}
        />
      </View>
    );
  };

  render() {
    const {dataList} = this.state;
    return (
      <View style={displayStyles.flexContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContentContainer}
          data={dataList}
          onEndReachedThreshold={0.5}
          onEndReached={() => {}}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item + '_' + index}
          ListEmptyComponent={this.renderEmptyComponent}
        />
      </View>
    );
  }
}

export default FlatListing;
