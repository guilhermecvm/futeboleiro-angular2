import { Injectable } from '@angular/core';

@Injectable()
export class MatchService {

  // getMatches(): Promise<Match[]> {
  getMatches() {
    return Promise.resolve({
           "data_hoje":"02/10/2016",
           "jogos":[
              {
                 "transmissao_id":20557,
                 "status":"Criada",
                 "fase_rodada":"7\u00aa rodada",
                 "dia_semana":"Dom",
                 "time_casa":{
                    "penalti":null,
                    "placar":0,
                    "sigla":"CVI",
                    "escudo":"http://s.glbimg.com//es/sde/f/original/2012/07/12/CeltadeVigo30.png",
                    "nome":"Celta de Vigo"
                 },
                 "video_ao_vivo":"",
                 "tipo_transmissao":"lance_a_lance",
                 "hora":"15:45",
                 "nome_campeonato":"Campeonato Espanhol",
                 "url":null,
                 "time_visitante":{
                    "penalti":null,
                    "placar":0,
                    "sigla":"BAR",
                    "escudo":"http://s.glbimg.com//es/sde/f/organizacoes/2014/04/14/barcelona_30x30.png",
                    "nome":"Barcelona"
                 },
                 "localizacao":null,
                 "data":"02/10/2016",
                 "id":205752
              },
              {
                 "transmissao_id":20558,
                 "status":"Em Andamento",
                 "fase_rodada":"7\u00aa rodada",
                 "dia_semana":"Dom",
                 "time_casa":{
                    "penalti":0,
                    "placar":1,
                    "sigla":"MAD",
                    "escudo":"http://s.glbimg.com//es/sde/f/organizacoes/2014/04/14/real_madrid_30x30.png",
                    "nome":"Real Madrid"
                 },
                 "video_ao_vivo":"",
                 "tipo_transmissao":"lance_a_lance",
                 "hora":"11:15",
                 "nome_campeonato":"Campeonato Espanhol",
                 "url":"http://globoesporte.globo.com/futebol/futebol-internacional/jogo/02-10-2016/realmadrid-eibar",
                 "time_visitante":{
                    "penalti":0,
                    "placar":1,
                    "sigla":"EIB",
                    "escudo":"http://s.glbimg.com/es/sde/f/organizacoes/2014/07/24/187px-SD_Eibar_logo.svg-30.png",
                    "nome":"Eibar"
                 },
                 "localizacao":"Santiago Bernab\u00e9u",
                 "data":"02/10/2016",
                 "id":205759
              },
              {
                 "transmissao_id":20556,
                 "status":"Encerrada",
                 "fase_rodada":"7\u00aa rodada",
                 "dia_semana":"Dom",
                 "time_casa":{
                    "penalti":0,
                    "placar":2,
                    "sigla":"TOT",
                    "escudo":"http://s.glbimg.com//es/sde/f/equipes/2015/08/08/tottenham_30.png",
                    "nome":"Tottenham"
                 },
                 "video_ao_vivo":"",
                 "tipo_transmissao":"lance_a_lance",
                 "hora":"10:15",
                 "nome_campeonato":"Campeonato Ingl\u00eas",
                 "url":"http://globoesporte.globo.com/futebol/futebol-internacional/jogo/02-10-2016/tottenham-manchestercity",
                 "time_visitante":{
                    "penalti":0,
                    "placar":0,
                    "sigla":"MAC",
                    "escudo":"http://s.glbimg.com//es/sde/f/equipes/2016/07/06/Lo-go-thuong-hieu-man-chester-city30.png",
                    "nome":"Manchester City"
                 },
                 "localizacao":"White Hart Lane",
                 "data":"02/10/2016",
                 "id":204060
              },
              {
                 "transmissao_id":20555,
                 "status":"Encerrada",
                 "fase_rodada":"7\u00aa rodada",
                 "dia_semana":"Dom",
                 "time_casa":{
                    "penalti":0,
                    "placar":1,
                    "sigla":"MAN",
                    "escudo":"http://s.glbimg.com/es/ge/f/original/2010/12/16/manchesterunited35.png",
                    "nome":"Manchester United"
                 },
                 "video_ao_vivo":"",
                 "tipo_transmissao":"lance_a_lance",
                 "hora":"08:00",
                 "nome_campeonato":"Campeonato Ingl\u00eas",
                 "url":"http://globoesporte.globo.com/futebol/futebol-internacional/jogo/02-10-2016/manchesterunited-stokecity",
                 "time_visitante":{
                    "penalti":0,
                    "placar":1,
                    "sigla":"STC",
                    "escudo":"http://s.glbimg.com/es/ge/f/original/2011/01/26/stoke.png",
                    "nome":"Stoke City"
                 },
                 "localizacao":"Old Trafford",
                 "data":"02/10/2016",
                 "id":204057
              }
           ]
       });
  }

}
