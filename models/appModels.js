import { requestGet } from "../utils/requestApi";
import NavigationService from "../navigation/NavigationService";



export const app = {
    // init and getters
    state: {
        name: '',
        informations: [],
        informationsSearch: {},
        citySearch: '',
        index :null,
    },
    // setters 
    reducers: {

        setIndex(state, { index }) {

            return { ...state, index };
        },

        setName(state, { name }) {

            return { ...state, name };
        },

        setCitySearch(state, { citySearch }) {

            return { ...state, citySearch };
        },

        setInformations(state, informations) {

            return { ...state, informations };
        },
        //  multi custom  setters alias [ reseter ]  
        resetSearchAndEdit(state , { informations }){
            return {...state, informations  , informationsSearch : {}, citySearch :''};
        },

        setInformationsSearch(state, informationsSearch) {

            return { ...state, informationsSearch };
        },
    },



    effects: (dispatch) => ({

        async getMeteoInformation() {
            const response = await requestGet('find', 'lat=44.93&lon=4.89&cnt=5');
          

            if (response.cod == 200) {
                this.setInformations(response.list);
            }
        },

        async getMeteoInformationForCity({ citySearch }) {
            const response = await requestGet('weather', 'q=' + citySearch);
            if (response.cod == 200) {

                this.setInformationsSearch(response);
            }
        },
        //Add element to Informations 

        addSearchToInformations(_ , rootState) {
            // const informations = rootState.app.informations;
            // const informationsSearch = rootState.app.informationsSearch;
            const {
                app: {
                    informations,
                    informationsSearch
                }
            } = rootState;
            // only one method to copy a multy depth object  
            // clone informations without ref to rootState.app.informations    
            const infoTemp  = JSON.parse(JSON.stringify(informations));

            // first place on array 
            infoTemp.unshift(informationsSearch);
            // replace informations with infoTemp
            this.resetSearchAndEdit({ informations : infoTemp });
           // redirection 
            NavigationService.navigate('Home');    

           

        },


        removeIndexInformations({index},rootState) {
            const {
                app: {
                    informations,
                }
            } = rootState;

            // clone informations without ref to rootState.app.informations    
            const infoTemp = JSON.parse(JSON.stringify(informations));     
            infoTemp.splice(index,1);
            this.resetSearchAndEdit({ informations: infoTemp });
            console.log(infoTemp);
            //console.log(rootState);

            // redirection 
           // NavigationService.navigate('Home');    

            
        }
    }),
}