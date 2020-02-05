import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-data',
  styleUrl: 'data.css',
  shadow: false
})
export class Data {

  render() {
    return (
      [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Data Quality Statement</ion-title>
        </ion-toolbar>
      </ion-header>
      ,
      <ion-content class="ion-padding">
        <h3>Are These Numbers Accurate?</h3>
        <p><b>Important!</b> Unlike most of the data you find on the Internet, which has social or economic value 
        but is not immediately actionable, the data you find here is not to be taken lightly. <br /><br />
        
        This tool will help you to understand data regarding the current state, and the historical record, of a humanitarian 
        tragedy that has caused a great deal of suffering, death, and destruction since early 2020, when 2019-nCov 
        (the "coronavirus") caused an outbreak of pneumonia in Wuhan, China, that has since spread to 26 countries and 
        resulted in at least 20,000 cases and 400 deaths in the past two weeks.</p>
        
        <p>
        While China has been hit harder than other countries at this point in time, there is a very serious risk 
        of the virus spreading out of control around the world. In other words, it is very possible that 
        the world will suffer a pandemic that will likely be far more serious than H1N1 in 2009, and perhaps 
        on the scale of Spanish Flu in 1918, which killed 50-100mil at a time when the world's population was 
        5x lower than it is today. The numbers contained in this dataset will help you to evaluate pandemic risk 
        as the situation unfolds, and to make predictions as to how deadly the virus really is. 

        </p>        
        <p>
        Although our "official" dataset matches the numbers published by WHO and therefore by the 
        countries affected by this outbreak, this does not guaranteee the accuracy of any of it: 
        the numbers are given to the WHO by the health authorities of each country affected 
        by the virus, and are therefore as reliable as their specific source.    
        </p>

        <p>
        Other than the obvious risk that certain countries may misrepresent  
        their data on purpose, for political or economic reasons, there is a wider issue, 
        which is that it is difficult to accurately track cases and deaths *during* an epidemic - 
        indeed, we will need to wait until the epidemic is under control before we can get a 
        precise assessment of the damage it has caused. 
        <br /><br />
        In the midst of a serious outbreak, sometimes mild cases will 
        be missed, as medical resources are overwhelmed dealing with serious cases. 
        Sometimes deaths may not be reported in a timely way because the medical examiners are 
        also very busy, processing more deaths than their office is equipped to handle. 
        This type of error can affect case and death totals reported by regional authorities, and may cause 
        calculations such as case fatality rate to be inaccurate (in either direction) 
        <br /><br />

        Because the improper interpretation of such data could result in bad decisions that cost lives or cause unnecessary panic and disruption, 
        you are encouraged to be EXTREMELY CAUTIOUS and to consult other sources (e.g. eyewitness reports 
        and the statements of epidemiologists) in combination with the numbers available here.     


        <b><i>To be clear: the master dataset in our archives comes from WHO. The WHO 
        gets their data from government sources in each country affected by the coronavirus. No 
        independent verification of the data has been performed</i></b>
        </p>

        <p>
        We try and stay out of politics, so I won't share my personal opinion as to the quality of data being shared 
        by any specific country. That said, it appears the data is following plausible trends - so it is definitely worth 
        studying and analyzing, as long as you remember that the numbers themselves are not necessarily correct!</p>

      <h3>Support Our Efforts</h3>

      <p><b class="darkred">If you find this service useful, and/or believe that we are doing something that 
      is important and beneficial to humanity, PLEASE make a confidential, secure donation to one of the 
      addresses below. Your contribution will make a huge difference in ensuring that this project moves 
      forward at a rapid pace, and that I am able to continue working full-time on this and other projects, 
      projects which have the potential to make a direct impact on the course that this outbreak will take in the 
      critical weeks ahead</b></p> 
      
      <b>ETH and Tokens: 0x71dfD8f3664a6c9925D4275169721e1a0f4281fc</b><br />
      <b>BTC / other currencies, please DM me on Twitter</b>

      <p>
      Whatever your ability to contribute financially, I hope you join the fight against the coronavirus and help out 
      with this project, in whatever way you are most capable! This is not like a tsunami that causes devastation somewhere far away, 
      it is more like an asteroid hurtling towards Earth, and we must do everything that we can to knock it off course. 
    
<br /><br />
      <i>MIGHT</i> this become a pandemic that costs 10 million or even 100 million human lives? YES.<br /> 
      <i>WILL</i> it? MAYBE! But not if the whole world works together to stop this thing!
      <br /><br />
      To reach this goal, sharing and seeking the TRUTH is a critical step in the right direciton.
      </p>

      <p>
      Please follow me on Twitter! <a href="https://twitter.com/2020writein">@2020WriteIn</a>
      </p>

        <p>
        Sincerely,<br />
        Sam Rahimi<br />
        Chief Engineer and Product Designer<br />
        The Daily Corona
        </p>
      </ion-content>
      ]
    );
  }

}
