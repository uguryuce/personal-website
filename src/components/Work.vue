<template>
    <div class="work">


        <div class="work-block">

            <div class="work-block-title">
                <h1><span>My</span> Skills</h1>
                <h3>Frontend Developer in Turkey</h3>
            </div>


            <div class="box">
                <ul class="box box-list">
                    <li class="box box-list-item" v-for="skill in skills">
                        <div class="lang">{{skill.lang}} </div>
                        <span class="percent">{{skill.percent/20}}</span>
                        <div class="bar">
                            <div class="progress" v-bind:style = "{'background':skill.color, 'width':skill.percent+'%'}"></div>

                        </div>
                    </li>
                </ul>
            </div>
        </div>


        <div class="work-square">
            <div class="work-square-item flex-end">
                <div class="work-square-item-small">
                 
                    <h6>Web Development</h6>
                </div>
            </div>
            <div class="work-square-item">
                <div class="work-square-item-small flex-end">
                
                    <h6>Frontend</h6>
                </div>
            </div>
            <div class="work-square-item">
                <div class="work-square-item-small">
             
                    <h6>UX | UI DESIGN</h6>
                </div>
            </div>
        </div>
        <div class="work-square">
            <div class="work-square-item">
                <div class="work-square-item-small">
                    
                    <h6>Web Development</h6>
                </div>
            </div>
            <div class="work-square-item">
                <div class="work-square-item-small flex-start">
             
                    <h6>Web Development</h6>
                </div>
            </div>
            <div class="work-square-item">
                <div class="work-square-item-small flex-start">
                    
                    <h6>Web Development</h6>
                </div>
            </div>
        </div>


    </div>
</template>


<script>

    export default {
        data () {
            return {
                skills:[
                    { lang:"HTML5",      	percent:100,   color:"#d9832e"	},
                    { lang:"CSS3", 			percent:100,   color:"#d9832e"	},
                    { lang:"JAVASCRIPT", 	percent:60,    color:"#d9832e"	},
                    { lang:"VUE",	        percent:80,    color:"#d9832e"	},
                    { lang:"REACT",		 	percent:40,    color:"#d9832e"	},
                    { lang:"FIGMA", 		percent:60,    color:"#d9832e"	}
                ]
            }
        }
    }

</script>



<style lang="scss">
    .work {
        background-color: #fbfbfd;
        margin-left: 95px;
        width: calc(100% - 95px);
        height: 100vh;
        display: flex;
        align-items: center;

        &-block {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            flex-direction: row;
            align-items: flex-start;
            margin-left: 9%;
            padding-top: 75px;
            width: 51%;
            height: 100vh;



            &-title {
                width: 100%;
                height: auto;
                background-color: transparent;

                & h1 {
                    text-transform: uppercase;
                    font-weight: 800;
                    font-size: 32px;
                    margin-bottom: 20px;
                    height: 60px;
                    display: block;

                    & span {
                        border-bottom: 2px solid #d9832e;
                        margin-top: 10px;
                        display: inline-block;
                        height: 50px;
                    }
                }

                & h3 {
                    font-size: 14px;
                    text-transform: uppercase;
                    font-weight: 300;
                    letter-spacing: 2px;
                }

            }





            .box {
                width: 100%;
                padding: 0px;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;

                &-list {


                    &-item {
                        margin-top: 30px;

                        &:first-child {
                            margin-top: 0px;
                        }
                    }
                }

            }

            ul li {
                list-style-type: none;
            }

            .lang {
                font-size: 16px;
                font-weight: 600;
                letter-spacing: .5px;
                display: flex;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                width: 50%;
                margin-bottom: 10px;


            }

            .percent {
                width: 50%;
                font-weight: 600;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-bottom: 10px;
                color: rgba(0,0,0,0.55);
            }

            .bar {
                width: 100%;
                background: #dddddd;
                border-radius: 35px;
                overflow: hidden;
                height: 5px;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
            }

            .progress {
                height: 5px;
                width: 100%;
            }
        }




        &-square {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-left: 10%;
            width: 40%;
            height: 100vh;

            &:last-child {
                margin-left: 0%;
            }

            &-item {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                width: 80%;
                margin-right: 10%;
                margin-top: 5%;
                margin-bottom: 5%;
                height: 25%;
                border-radius: 4px;
                border: 1px solid rgba(0,0,0,.07);
                -webkit-box-shadow: 0px 0px 11px -2px rgba(0,0,0,0.7);
                -moz-box-shadow: 0px 0px 11px -2px rgba(0,0,0,0.7);
                box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.15);

                &-small {

                    i {
                        font-size: 50px;
                        color: #999;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        margin-bottom: 20px;
                    }

                    h6{
                        font-size: 13px;
                        font-weight: 700;
                        color: #555a72;
                        text-align: center;
                        letter-spacing: .4px;
                        text-transform: uppercase;
                    }
                }


            }

        }






    }

</style>