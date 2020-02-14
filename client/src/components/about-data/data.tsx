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
          <ion-title>About The Data</ion-title>
        </ion-toolbar>
      </ion-header>
      ,
      <ion-content class="ion-padding">
              <h3>Support Our Efforts</h3>

              <p><b class="darkred">If you find this service useful, and/or believe that we are doing something that 
              is important and beneficial to humanity, PLEASE make a confidential, secure donation to one of the 
              addresses below. Your contribution will make a huge difference in ensuring that this project moves 
              forward at a rapid pace, and that I am able to continue working full-time on this and other projects, 
              projects which have the potential to make a direct impact on the course that this outbreak will take in the 
              critical weeks ahead</b></p> 

              <b>ETH and Tokens: 0x71dfD8f3664a6c9925D4275169721e1a0f4281fc</b><br />
              <b>BTC and Fiat currencies, contact me on Twitter below </b>

              <p>
              Whether or not you can make a donation, you have a critical role to play in what is shaping up to be a pivotal moment in human history! 
              This is not like a tsunami that causes devastation somewhere far away;
              it is more like an asteroid hurtling towards Earth, while we frantically try and knock it off its collision course. 
        </p>

        <h3>Note on Data Integrity</h3>
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


        <p>
        Sincerely,<br />
        Sam Rahimi<br />
        Founder<br />
        The Daily Corona
        https://github.com/daily-corona
        </p>
      </ion-content>
      ]
    );
  }

}
