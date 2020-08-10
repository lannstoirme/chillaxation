import React, { Component } from 'react';
import Sound from 'react-native-sound';
import {
    View, 
    ScrollView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';


const audioTracks = [
    {
        "id": "1111",
        "title": "Ten Minute Breathing",
        "artist": "Peter Morgan, Free Mindfulness",
        "albumArtUrl": "https://i.ibb.co/ypvG3yD/meditate1.png",
        "url": "https://www.filehosting.org/file/details/886606/FreeMindfulness10MinuteBreathing.mp3",
        "duration": "600"
      },
      {
        "id": "2222",
        "title": "Twenty Minutes of Bells",
        "artist": "Padraig O~Morain",
        "albumArtUrl": "https://i.ibb.co/Jj8hmZN/meditate7.jpg",
        "url": "https://www.filehosting.org/file/details/886607/FreeMindfulness20MinuteJustBells.mp3",
        "duration": "1200"
      },
];

var sound1, sound2;
function playSound(item, index){
    if(index==0){
        sound1= new Sound(item.url, '', (error, sound)=>{
            if(error){
                alert('error'+error+message);
                return;
            }
            sound1.play(()=>{
                sound1.release();
            });
        });
    } else if (index==1){
        sound2 = new Sound(item.url, '',(error, sound)=>{
            if(error){
                alert('error'+error+message);
                return;
            }
            sound2.play(()=>{
                sound2.release();
            });
        });
    } 
}

function stopSound(item, index){
    if (index==0 && sound1){
        sound1.stop(()=>{
            console.log('stop sound 1');
        });
    } else if (index==1 && sound2) {
        sound2.stop(()=>{
            console.log('stop sound 2');
        });
    } 
}

class Player extends Component {
    render() {
        return (
            <SafeAreaView style={styles.screenpage}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>
                    Meditation Playlist 
                </Text>
                    <ScrollView style={styles.scrolling} key={item.id}>
                    {audioTracks.map((item, index)=>{
                        return(
                            <View style={styles.feature} key={item, id}>
                                <Text style={{flex: 1, fontSize:14}} >{item.title}</Text>
                                    <TouchableOpacity onPress={()=>{ return playSound(item, index) }} >
                               <Text style={styles.buttonPlay}>
                                   Play
                               </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>{ return stopSound(item, index) }}>
                                <Text style={styles.buttonStop}>
                                    Stop
                                </Text>
                                    </TouchableOpacity>
                        </View>
                        );
                    })}                       
                    </ScrollView>
            
            </View>
            
            </SafeAreaView>
            
        );
    }
};

export default Player;


const styles = StyleSheet.create({
    screenpage: {
        backgroundColor: Colors.lilac,
    },
    headerTitle: {
        color: Colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        fontAlign: 'center',
    },
    container: {
        backgroundColor: Colors.purple,
        flex: 1,
    },
    scrolling: {
        backgroundColor: 'green',
    },
    buttonPlay: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'blue',
        paddingVertical: 10,
    },
    buttonStop: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'red',
        paddingVertical: 10,
    },
    feature: {
        flexDirection: 'row',
        padding: 20,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderTopWidth: 3,
    },
});

