angular.module('Hansaton', [
  'ngRoute',
  'mobile-angular-ui.gestures',
  'ngCordova',
  'mobile-angular-ui',
  'ui.router'
])

.run(function ($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function () {
    setTimeout(function () {
      $rootScope.$digest();
    });
  });
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
    event.preventDefault();
    console.log( event, toState, toParams, fromState, fromParams );
  });
})
// List of products and all of their features, designs, etc
.constant('PRODUCTS', [
  {
    sref: 'RIC',
    name: 'RIC',
    navImageActive: 'images/Ric.png',
    navImageInactive: 'images/Ric-white.png',
    title: 'Außenhörer-Hörsystem',
    descriptionTitle: 'Außenhörer-Hörsystem',
    description: 'RIC (= Receiver In Canal) Hörsysteme sitzen hinter dem Ohr. Der Lautsprecher sitzt im Ohr direkt vor dem Trommelfell. Akustische Signale werden unauffällig über dünne Kabel elektrisch in das Ohr weitergegeben. Da dadurch keine Töne „verloren gehen“, kann eine hohe Klangqualität sowie ein sehr hohes Sprachverständnis erzielt werden.',
    rulerImages: ['images/big-ruler.png'],
    panelHeight: 339,
    featuresImage: 'images/RIC-features.png',
    features: [
      {
        title: 'Kleines Gehäuse',
        description: 'Der Hörer (Lautsprecher) sitzt außerhalb des Hörsystems. RIC Hörsysteme können dadurch sehr klein gefertigt werden und sind dennoch leistungsstark.',
        coords: { x: 100, y: 100 }
      },
      {
        title: 'Der Hörer im Ohr',
        description: 'Der Außenhörer sitzt im Ohr. Ein Schlauch, der die feinen Kabel bündelt, leitet akustische Signale elektrisch ins Ohr.  Ein „Schirmchen“, der sogenannte Dome, sorgt dafür, dass der Lautsprecher an der richtigen Stelle im Ohr sitzt und die Signale das Trommelfell ungehindert erreichen.',
        coords: { x: 100, y: 250 }
      },
      {
        title: 'Optimal positioniert',
        description: 'Anstelle eines Domes kann auch eine individuell für das Ohr angefertigte Otoplastik verwendet werden. Die individuelle Passform sorgt für einen sehr stabilen Sitz im Ohr und damit stets für eine ungehinderte Übertragung der akustischen Signale zum Trommelfell.',
        coords: { x: 270, y: 450}
      },
      {
        title: 'Komfortable Bedienung',
        description: 'Mit Bedienelementen (sogenannte Taster oder Wippschalter) können, ergänzend zum Automatikbetrieb, individuelle Komfortprogramme ausgewählt werden. Auch die Regelung der Lautstärke ist möglich.',
        coords: { x: 400, y: 70 }
      },
      {
        title: 'Was drin steckt…',
        description: 'Neben modernster Mikroelektronik befinden sich Mikrofone zur Schallaufnahme im Hörsystem. Am unteren Teil des Gehäuses befindet sich das Batteriefach. Dieses kann zum An- und Ausschalten sowie zum Wechseln der Batterie einfach geöffnet werden.',
        coords: { x: 500, y: 250 }
      }
    ],
    designs: [
      {
        sref: '312',
        name: 'soundHD 312',
        thumbnail: 'images/soundHD-312-thumbnail.png',
        rulerImages: ['images/small-ruler-c.png', 'images/paper-clip.png'],
        featuresPanelContentHeight: 310,
        designFeatures: [
          {
            icon: 'images/design-features-teardrop.png',
            text: 'Die formgebende Design-Welle verleiht dem Hörsystem sein individuelles und filigranes Design.'
          },
          {
            icon: 'images/design-features-feather.png',
            text: 'Die weichen, abgerundeten Formen sorgen für einen hohen Tragekomfort.'
          },
          {
            icon: 'images/design-features-colors.png',
            text: 'Besonders abwechslungsreich: soundHD 312 ist in 7 eleganten Farbkombinationen erhältlich.'
          }
        ],
        specifications: [
          'Außenhörer (RIC)',
          'Batteriegröße 312',
          'IP57 zertifiziert (wasser- und schmutzresistent)',
          'Plasmabeschichtet'
        ],
        colors: [
          {
            name: 'White Pearl',
            url: 'images/soundHD-312-white-pearl.png'
          },
          {
            name: 'Cloudy Grey',
            url: 'images/soundHD-312-cloudy-grey.png'
          },
          {
            name: 'Sterling Silver',
            url: 'images/soundHD-312-sterling-silver.png'
          },
          {
            name: 'Space Titan',
            url: 'images/soundHD-312-space-titan.png'
          },
          {
            name: 'Carbon Black',
            url: 'images/soundHD-312-carbon-black.png'
          },
          {
            name: 'Sparkling Bronze',
            url: 'images/soundHD-312-sparkling-bronze.png'
          },
          {
            name: 'Sandy Beige',
            url: 'images/soundHD_312_Sandy_Beige.png'
          }
        ]
      },
      {
        sref: 'S312',
        name: 'soundHD S312',
        thumbnail: 'images/soundHD-S312-thumbnail.png',
        rulerImages: ['images/small-ruler-c.png', 'images/paper-clip.png'],
        featuresPanelContentHeight: 350,
        designFeatures: [
          {
            icon: 'images/design-features-teardrop.png',
            text: 'Die formgebende Welle verleiht dem eleganten Gehäuse sein filigranes Design.'
          },
          {
            icon: 'images/design-features-feather.png',
            text: 'Die abgerundete Gehäuseform sorgt für einen angenehmen Sitz hinter dem Ohr. Der Taster ermöglicht eine einfache Bedienung.'
          },
          {
            icon: 'images/design-features-colors.png',
            text: 'Elegantes Farbenspiel: soundHD S312 ist in 7 eleganten Farbkombinationen erhältlich.'
          }
        ],
        specifications: [
          'Außenhörer (RIC)',
          'Batteriegröße 312',
          'IP57 zertifiziert (wasser- und schmutzresistent)',
          'Plasmabeschichtet',
          'Bedienelement',
          'Telefonspule integriert'
        ],
        colors: [
          {
            name: 'White Pearl',
            url: 'images/soundHD-S312-white-pearl.png'
          },
          {
            name: 'Cloudy Grey',
            url: 'images/soundHD-S312-cloudy-grey.png'
          },
          {
            name: 'Sterling Silver',
            url: 'images/soundHD-S312-sterling-silver.png'
          },
          {
            name: 'Space Titan',
            url: 'images/soundHD-S312-space-titan.png'
          },
          {
            name: 'Carbon Black',
            url: 'images/soundHD-S312-carbon-black.png'
          },
          {
            name: 'Sparkling Bronze',
            url: 'images/soundHD-S312-sparkling-bronze.png'
          },
          {
            name: 'Sandy Beige',
            url: 'images/soundHD_S312_Sandy_Beige.png'
          }
        ],
      },
      {
        sref: '13',
        name: 'soundHD 13',
        thumbnail: 'images/soundHD-13-thumbnail.png',
        rulerImages: ['images/small-ruler.png', 'images/paper-clip.png'],
        featuresPanelContentHeight: 330,
        designFeatures: [
          {
            icon: 'images/design-features-teardrop.png',
            text: 'Elegantes Design-Gehäuse mit formgebender, moderner Design-Welle.'
          },
          {
            icon: 'images/design-features-feather.png',
            text: 'Die abgerundete Gehäuseform sorgt für einen angenehmen Sitz hinter dem Ohr. Der innovative Taster ermöglicht die einfache Bedienung per Fingertipp.'
          },
          {
            icon: 'images/design-features-colors.png',
            text: 'Besonders farbenfroh: in 7 eleganten Farbkombinationen erhältlich.'
          }
        ],
        specifications: [
          'Außenhörer (RIC)',
          'Batteriegröße 13',
          'IP67 zertifiziert (wasser- und schmutzresistent)',
          'Plasmabeschichtet',
          'Bedienelement',
          'Telefonspule integriert'
        ],
        colors: [
          {
            name: 'White Pearl',
            url: 'images/soundHD-13-white-pearl.png'
          },
          {
            name: 'Cloudy Grey',
            url: 'images/soundHD-13-cloudy-grey.png'
          },
          {
            name: 'Sterling Silver',
            url: 'images/soundHD-13-sterling-silver.png'
          },
          {
            name: 'Space Titan',
            url: 'images/soundHD-13-space-titan.png'
          },
          {
            name: 'Carbon Black',
            url: 'images/soundHD-13-carbon-black.png'
          },
          {
            name: 'Sparkling Bronze',
            url: 'images/soundHD-13-sparkling-bronze.png'
          },
          {
            name: 'Sandy Beige',
            url: 'images/soundHD_13_Sandy_Beige.png'
          }
        ]
      }
    ]
  },
  {
    sref: 'ITE',
    name: 'ITE',
    navImageActive: 'images/iTE.png',
    navImageInactive: 'images/iTE-white.png',
    title: 'Im-Ohr-Hörsystem',
    descriptionTitle: 'Im-Ohr-Hörsystem',
    description: 'Im-Ohr–Hörsysteme  (IO) werden auf Grundlage eines persönlichen Ohrabformung gefertigt. Mit modernster Lasertechnologie entsteht ein Hörsystem, das der individuellen Form des Ohres entspricht. IO Hörsysteme und damit auch deren Mikrofone sitzen im Gehörgang. Bei der Schallaufnahme wird dadurch die individuelle Klangbeeinflussung durch die Ohrmuschel  berücksichtigt.',
    rulerImages: ['images/big-ruler-io.png'],
    featuresImage: 'images/ITE-features.jpg',
    panelHeight: 382,
    features: [
      {
        title: 'Individuelles Gehäuse',
        description: 'Die Größe von IO-Hörsystemen ist abhängig vom akustischen Bedarf sowie von den persönlichen Wünschen und natürlich der individuellen Ohrform bzw. der Form des Gehörgangs. Durch ihren Sitz im Ohr sind sie besonders unauffällig und diskret.',
        coords: { x: 0, y: 90 }
      },
      {
        title: 'IIC und CIC',
        description: 'Kleinste IO-Hörsystem Bauformen werden tief in den Gehörgang eingeführt und sind somit nahezu unsichtbar. Man spricht von IIC und CIC Hörsystemen. Sie sitzen sehr nahe am Trommelfell.',
        coords: { x: 480, y: 188 }
      },
      {
        title: 'Mini Canal, Canal, Halbconcha, Concha',
        description: 'Abhängig vom akustischen Bedarf, der Ohrform und den Wünschen können IO Hörsysteme auch größer sein. Sie finden ihren Platz dann dementsprechend tief oder auch weniger tief im Gehörgang oder in der Ohrmuschel.',
        coords: { x: 280, y: 266 }
      },
      {
        title: 'Komfortable Bedienung',
        description: 'Bedienelemente (Lautstärkeregler und Taster) sind auch bei IO-Hörsystemen möglich. Mit ihnen können, ergänzend zum Automatikbetrieb, individuelle Komfortprogramme ausgewählt sowie die Lautstärke geregelt werden.',
        coords: { x: 78, y: 234 }
      }
    ],
    designs: [
      {
        sref: 'Alle',
        name: 'jamHD IO',
        thumbnail: 'images/jamHD-ITE-thumbnail.png',
        featuresPanelContentHeight: 350,
        designFeatures: [
          {
            icon: 'images/design-features-feather.png',
            text: 'Haptisch speziell geformte Bedienelemente sorgen für eine komfortable und einfache Bedienung.'
          },
          {
            icon: 'images/design-features-heart.png',
            text: 'jamHD IO-Hörsysteme fügen sich optimal in das Ohr ein. Die weichen, abgerundeten Formen sorgen für ein harmonisches Erscheinungsbild.'
          },
          {
            icon: 'images/design-features-colors.png',
            text: 'Besonders robust: Die Oberfläche von jamHD IO ist plasmabeschichtet.'
          }
        ],
        specifications: [
          'Im-Ohr (IO)',
          'Batteriegrößen 10, 312, 13',
          'Plasmabeschichtete Oberfläche',
          'Bedienelement optional'
        ],
        colors: [
          {
            name: 'IIC',
            url: 'images/ITE-all-IIC.png',
            descriptionTitle: 'jamHD IIC',
            description: 'Das jamHD IIC ist besonders klein und sitzt sehr tief im Gehörgang. Es wird mit einer Batterie der Größe 10 betrieben. Über einen Zugfaden kann es einfach aus dem Gehörgang entfernt werden. Von außen ist das IIC nahezu unsichtbar.'
          },
          {
            name: 'CIC',
            url: 'images/ITE-all-CIC.png',
            descriptionTitle: 'jamHD CIC',
            description: 'jamHD CIC sitzt ähnlich weit im Gehörgang wie das IIC und ist ebenfalls von außen kaum sichtbar. Betrieben wird das CIC mit einer Batterie der Größe 10. Über einen Zugfaden kann es wieder aus dem Gehörgang entfernt werden.'
          },
           {
            name: 'Mini Canal',
            url: 'images/ITE-all-mini-canal.png',
            descriptionTitle: 'Mini Canal',
            description: 'jamHD Mini Canal sitzt im Gehörgang und wird in der Regel mit einer Batterie der Größe 10 betrieben. Der tiefe Sitz im Ohr und die hautfarbene Oberfläche machchen jamHD Mini Canal zu einer diskreten Hörsystem-Lösung. jamHD Mini Canal kann einfach mit der Hand entfernt werden.'
          },
          {
            name: 'Canal',
            url: 'images/ITE-all-canal.png',
            descriptionTitle: 'Canal',
            description: 'jamHD Canal sitzt am Anfang des Gehörganges und wird in der Regel mit einer Batterie der Größe 312 betrieben. Durch die hautfarbene Oberfläche ist jamHD Canal ebenfalls eine sehr diskrete Hörsystem-Lösung. Es kann ganz einfach mit der Hand aus dem Ohr entfernt werden.'
          },
           {
            name: 'Halbconcha',
            url: 'images/Halbconcha.png',
            descriptionTitle: 'jamHD Halbconcha',
            description: 'jamHD Halbconcha füllt die Concha teilweise aus. In der Regel wird es mit einer Batterie der Größe 312 betrieben. Die hautfarbene Oberfläche macht es zu einem diskreten Helfer.  Entfernt werden kann es einfach per Hand.'
          },

          {
            name: 'Concha',
            url: 'images/ITE-all-full-shell.png',
            descriptionTitle: 'Concha',
            description: 'jamHD Concha Hörsysteme füllen die Concha komplett aus. Sie werden in der Regel mit einer Batterie der Größe 13 betrieben. Durch eine hautfarbene Optik ist jamHD Concha diskret. Es kann ganz einfach mit der Hand aus dem Ohr entfernt werden.'
          }
        ]
      }
    ]
  },
  {
    sref: 'BTE',
    name: 'BTE',
    navImageActive: 'images/BTE.png',
    navImageInactive: 'images/BTE-white.png',
    title: 'Hinter-dem-Ohr-Hörsysteme',
    descriptionTitle: 'Hinter-dem-Ohr-Hörsystem',
    description: 'Hinter-dem-Ohr-Hörsysteme (HdO) sitzen hinter dem Ohr. Über einen unauffälligen Schallschlauch werden sie mit dem Ohr verbunden. Akustische Signale werden über diesen Schlauch ins Ohr geleitet.',
    rulerImages: ['images/small-ruler.png'],
    featuresImage: 'images/BTE-features.png',
    panelHeight: 322,
    features: [
      {
        title: 'Kleines Gehäuse',
        description: 'Miniaturisierte Bauteile erlauben auch bei HdO-Hörsystemen die Umsetzung einer kleinen Bauweise.',
        coords: { x: 60, y: 100 }
      },
      {
        title: 'Gut befestigt',
        description: 'Je nach Hörminderung wird das HdO-Hörsystem mit einem Tragehaken oder mit dem Schallschlauch hinter dem Ohr getragen und im Ohr mit einer individuellen Otoplastik oder einem Dome befestigt.',
        coords: { x: 200, y: 130 }
      },
      {
        title: 'Optimal positioniert',
        description: 'Es gibt Standard Domes sowie individuell gefertigte Otoplastiken. Die individuelle Passform sorgt für einen sehr stabilen Sitz im Ohr und damit stets für eine ungehinderte Übertragung der akustischen Signale zum Trommelfell.',
        coords: { x: 120, y: 450 }
      },
      {
        title: 'Komfortable Bedienung',
        description: 'Mit Bedienelementen (sogenannte Taster oder Wippschalter) können, ergänzend zum Automatikbetrieb, individuelle Komfortprogramme ausgewählt werden. Auch die Regelung der Lautstärke ist möglich.',
        coords: { x: 300, y: 24 }
      },
      {
        title: 'Was drin steckt…',
        description: 'Neben modernster Mikroelektronik befinden sich Mikrofone zur Schallaufnahme und Hörer zur Schallabgabe im Hörsystem. Am unteren Teil des Gehäuses befindet sich das Batteriefach. Dieses kann zum An- und Ausschalten sowie zum Wechseln der Batterie einfach geöffnet werden.',
        coords: { x: 460, y: 200 }
      }
    ],
    designs: [
      {
        sref: 'S13',
        name: 'jamHD S13',
        thumbnail: 'images/jamHD-S13-thumbnail.png',
        rulerImages: ['images/small-ruler.png', 'images/paper-clip.png'],
        featuresPanelContentHeight: 350,
        designFeatures: [
          {
            icon: 'images/design-features-teardrop.png',
            text: 'Dynamische Design-Gehäuse mit formgebender Design-Welle.'
          },
          {
            icon: 'images/design-features-feather.png',
            text: 'Abgerundete Formen sorgen  für einen angenehmen Sitz hinter dem Ohr. Der speziell designte Taster ermöglicht eine einfache Bedienung per Fingertipp.'
          },
          {
            icon: 'images/design-features-colors.png',
            text: 'Dynamisches Farbenspiel: jamHD S13 ist in 7 modernen Farbkombinationen erhältlich.'
          }
        ],
          specifications: [
          'Hinter-dem-Ohr (HdO)',
          'Batteriegrößen: 13',
          'IP67 zertifiziert (wasser- und schmutzresistent)',
          'Plasmabeschichtet',
          'Bedienelemente',
          'Telefonspule integriert'
        ],
        colors: [
          {
            name: 'White Pearl',
            url: 'images/jamHD-S13-white-pearl.png'
          },
          {
            name: 'Cloudy Grey',
            url: 'images/jamHD-S13-cloudy-grey.png'
          },
          {
            name: 'Sterling Silver',
            url: 'images/jamHD-S13-sterling-silver.png'
          },
          {
            name: 'Space Titan',
            url: 'images/jamHD-S13-space-titan.png'
          },
          {
            name: 'Carbon Black',
            url: 'images/jamHD-S13-carbon-black.png'
          },
          {
            name: 'Sparkling Bronze',
            url: 'images/jamHD-S13-sparkling-bronze.png'
          },
          {
            name: 'Sandy Beige',
            url: 'images/jamHD-S13-sandy-beige.png'
          }
        ]
      },
      {
        sref: 'RS13',
        name: 'jamHD RS13',
        thumbnail: 'images/jamHD-RS13-thumbnail.png',
        rulerImages: ['images/small-ruler.png', 'images/paper-clip.png'],
        featuresPanelContentHeight: 350,
        designFeatures: [
          {
            icon: 'images/design-features-teardrop.png',
            text: 'Die formgebende Design-Welle verleiht dem Hörsystem sein individuelles und dynamisches Design.'
          },
          {
            icon: 'images/design-features-feather.png',
            text: 'Der speziell designte Taster und der Wippschalter machen die Bedienung per Fingertipp noch komfortabler.'
          },
          {
            icon: 'images/design-features-colors.png',
            text: 'Besonders abwechslungsreich: jamHD RS13 ist in 7 modernen Farbkombinationen erhältlich.'
          }
        ],
        specifications: [
          'Hinter-dem-Ohr (HdO)',
          'Batteriegrößen: 13',
          'IP67 zertifiziert (wasser- und schmutzresistent)',
          'Plasmabeschichtet',
          'Bedienelemente',
          'Telefonspule integriert'
        ],
        colors: [
          {
            name: 'White Pearl',
            url: 'images/jamHD-RS13-white-pearl.png'
          },
          {
            name: 'Cloudy Grey',
            url: 'images/jamHD-RS13-cloudy-grey.png'
          },
          {
            name: 'Sterling Silver',
            url: 'images/jamHD-RS13-sterling-silver.png'
          },
          {
            name: 'Space Titan',
            url: 'images/jamHD-RS13-space-titan.png'
          },
          {
            name: 'Carbon Black',
            url: 'images/jamHD-RS13-carbon-black.png'
          },
          {
            name: 'Sparkling Bronze',
            url: 'images/jamHD-RS13-sparkling-bronze.png'
          },
          {
            name: 'Sandy Beige',
            url: 'images/jamHD-RS13-sandy-beige.png'
          }
        ]
      }
    ]
  }
])
.constant('PERFORMANCE_LEVELS', [
  {
    level: 2,
    channels: 4,
    description: 'Der perfekte Einstieg: Gutes Sprachverstehen und Hörkomfort in vielen akustischen Situationen.'
  },
  {
    level: 3,
    channels: 8,
    description: 'Die höhere Ebene guten Sprachverstehens. Komfortfeatures unterstützen das angenehme Tragen.'
  },
  {
    level: 5,
    channels: 12,
    description: 'Präzise HD Signalverarbeitung. Automatische Einstellung auf Basis von 5 Situationen.'
  },
  {
    level: 7,
    channels: 16,
    description: 'Sprachverstehen und Hörkomfort auf hohem Niveau. Programmautomatik auf Basis von 6 Situationen. Optimiertes Sprachverstehen in alle Richtungen.'
  },
  {
    level: 9,
    channels: 20,
    description: 'Hörkomfort, Klang und Sprachverstehen der Spitzenklasse: Automatikprogramm auf Basis von 7 Situationen. Alle Features im perfekten Zusammenspiel. Für den aktiven Alltag.'
  }
])
.constant('PERFORMANCE_ACTIVITIES', [
  {
    level: 3,
    height: 100,
    icon: 'images/performance-activity-chat.png',
    greenIcon: 'images/green-performance-activity-chat.png',
    text: 'Sprache in ruhiger Umgebung'
  },
  {
    level: 3,
    height: 120,
    icon: 'images/performance-activity-voice-chat.png',
    greenIcon: 'images/green-performance-activity-voice-chat.png',
    text: 'Sprache im Störgeräusch'
  },
  {
    level: 5,
    height: 200,
    icon: 'images/performance-activity-announcement.png',
    greenIcon: 'images/green-performance-activity-announcement.png',
    text: 'Geräuschvolle Umgebung'
  },
  {
    level: 5,
    height: 220,
    icon: 'images/performance-activity-sofa.png',
    greenIcon: 'images/green-performance-activity-sofa.png',
    text: 'Ruhige Umgebung'
  },
  {
    level: 5,
    height: 240,
    icon: 'images/performance-activity-group-chat.png',
    greenIcon: 'images/green-performance-activity-group-chat.png',
    text: 'Sprache in großer Gruppe'
  },
  {
    level: 7,
    height: 300,
    icon: 'images/performance-activity-music.png',
    greenIcon: 'images/green-performance-activity-music.png',
    text: 'Musik'
  },
  {
    level: 9,
    height: 400,
    icon: 'images/performance-activity-two-person-chat.png',
    greenIcon: 'images/green-performance-activity-two-person-chat.png',
    text: 'Sprache in kleiner Gruppe'
  }
])
.constant('PERFORMANCE_TECHNOLOGIES', [
  {
    name: 'Premium',
    contents: [
      { name: 'Sprache in kleiner Gruppe', level: 9, description: 'Sprache in kleiner Gruppe ist Teil des Automatikprogramms, das verschiedenste akustische Situationen erkennt und sich automatisch optimal einstellt.' },
      { name: 'SpeechBeam+', level: 7, description: 'Sorgt für ein besseres Sprachverstehen in allen Richtungen.' },
      { name: 'Musik', level: 7, description: 'Musik ist Teil des Automatikprogramms, das verschiedenste akustische Situationen erkennt und sich automatisch optimal einstellt.' },
      { name: 'Geräuschvolle Umgebung', level: 5, description: 'Geräuschvolle Umgebung ist Teil des Automatikprogramms, das verschiedenste akustische Situationen erkennt und sich automatisch optimal einstellt.' },
      { name: 'Ruhige Umgebung', level: 5, description: 'Ruhige Umgebung ist Teil des Automatikprogramms, das verschiedenste akustische Situationen erkennt und sich automatisch optimal einstellt.' },
      { name: 'Sprache in großer Gruppe', level: 5, description: 'Sprache in großer  Gruppe ist Teil des Automatikprogramms, das verschiedenste akustische Situationen erkennt und sich automatisch optimal einstellt.' },
      { name: 'Pinna Effekt', level: 5, description: 'Bildet die Klangbeeinflussung durch die anatomische Form der Ohrmuschel nach: für natürliches, räumlich klangvolles Hören.' },
      { name: 'Sprache in ruhiger Umgebung', level: 3, description: 'Sprache in ruhiger Umgebung ist Teil des Automatikprogramms, das verschiedenste akustische Situationen erkennt und sich automatisch optimal einstellt.' },
      { name: 'Sprache im Störgeräusch', level: 3, description: 'Sprache im Störgeräusch ist Teil des Automatikprogramms, das verschiedenste akustische Situationen erkennt und sich automatisch optimal einstellt.' }
    ]
  },
  {
    name: 'Wireless',
    contents: [
      { name: 'BiLink', level: 3, description: 'Kontinuierliche, automatische Synchronisation beider Hörsysteme, die ein besseres Sprachverstehen und Richtungshören, besonders in lärmerfüllter Umgebung sichert.' },
      { name: 'BiPhone', level: 3, description: 'Beim Telefonieren wird die Sprecherstimme vom Telefonohr auf die andere Seite übertragen, für mehr Sprachverstehen und entspannte Gespräche.' },
      { name: 'Fernbedienung', level: 3, description: 'Möglichkeit, Hörsysteme über diverse Fernbedienungen zu bedienen.' }
    ]
  },
  {
    name: 'Sprache',
    contents: [
      { name: 'Frequenzkompression', level: 3, description: 'Nicht hörbare, hochfrequente Töne werden wieder in den hörbaren Bereich gebracht.' },
      { name: 'Spracherkennung', level: 2, description: 'Sprache wird hervorgehoben und störende Geräusche werden wirkungsvoll unterdrückt.' },
      { name: 'Mehrmikrofontechnik', level: 2, description: 'Ermöglicht optimales Sprachverstehen in allen Situationen durch automatische Richtwirkung der Mikrofone.' },
      { name: 'Störschall Manager', level: 2, description: 'Kontinuierliche Reduzierung von Störgeräuschen bewirkt ein angenehmes Klangempﬁnden in geräuschvoller Umgebung.' },
      { name: 'Windgeräusch Manager', level: 2, description: 'Störende Windgeräusche werden erkannt und sofort unterdrückt.' },
    ]
  },
  {
    name: 'Komfort',
    contents: [
      { name: 'Direktschall Management', level: 3, description: 'Zuverlässige Aufrechterhaltung der Klangqualität auch bei offenen Versorgungen, die den Gehörgang nicht verschließen.' },
      { name: 'Akklimatisierungs Manager', level: 3, description: 'Bietet angenehmen Klang und Hörkomfort von Anfang an. Langsame Veränderungen führen sanft an das optimale Hör-Erleben heran.' },
      { name: 'Impulsschall Manager', level: 2, description: 'Angenehmeres Hören ohne Störung durch plötzliche, impulshafte Signale.' },
      { name: 'Rückkopplungs Manager', level: 2, description: 'Störende Pfeifgeräusche werden sofort unterdrückt – auch beim Telefonieren.' },
      { name: 'Digitale Rauschunterdrückung', level: 2, description: 'Reduziert das Grundrauschen in ruhigen Situationen.' }
    ]
  }
])
.constant('OVERVIEW_SECTIONS', [
  {
    state: 'info',
    name: 'Info',
    links: [
      {
        state: 'info',
        stateParams: { topic: 'ear-infographic' },
        image: 'images/overview-ear-infographic.png',
        name: 'Reise durch das Ohr',
        description: 'Das Ohr ist ein komplexes Organ. Nur ein kleiner Teil ist von außen sichtbar. Erfahren Sie hier mehr zum Aufbau des Ohres.'
      },
      {
        state: 'info',
        stateParams: { topic: 'hearing-loss-causes' },
        image: 'images/overview-hearing-loss-causes.png',
        name: 'Ursachen für Hörverlust',
        description: 'Für Hörverlust gibt es verschiedene Ursachen. Die Gründe können sich in allen Bereichen des Ohres finden.'
      },
      {
        state: 'info',
        stateParams: { topic: 'hearing-loss-meaning' },
        image: 'images/overview-what-is-hearing-loss.png',
        name: 'Was bedeutet Hörverlust?',
        description: 'Hörverlust ist nicht gleich Hörverlust. Es gibt verschiedene Abstufungen. Aber was genau bedeutet das für Sie und Ihren Alltag?'
      },
      {
        state: 'info',
        stateParams: { topic: 'hearing-aid-reasons' },
        image: 'images/overview-why-a-hearing-aid.png',
        name: 'Warum ein Hörsystem?',
        description: 'Hörsysteme können bei vielen Arten einer Hörminderung helfen. Erfahren Sie hier, wie Ihnen ein Hörsystem helfen kann.'
      },
      {
        state: 'info',
        stateParams: { topic: 'good-to-know' },
        image: 'images/overview-good-to-know.png',
        name: 'Wissenswertes',
        description: 'Hörsystem ist nicht gleich Hörsystem. Die Entscheidung ist abhängig von unterschiedlichen Faktoren. Erfahren Sie hier mehr.'
      }
    ]
  },
  {
    state: 'product-types',
    name: 'Bauformen',
    links: [
      {
        state: 'product.list',
        stateParams: { product: 'RIC' },
        name: 'RIC',
        image: 'images/overview-ric.png',
        description: 'Wissenswertes über Außenhörer-Hörsysteme.'
      },
      {
        state: 'product.list',
        stateParams: { product: 'ITE' },
        name: 'IO',
        image: 'images/overview-io.png',
        description: 'Wissenswertes über \n Im-Ohr-Hörsysteme.'
      },
      {
        state: 'product.list',
        stateParams: { product: 'BTE' },
        name: 'HdO',
        image: 'images/overview-bte.png',
        description: 'Wissenswertes über \nHinter-dem-Ohr-Hörsysteme.'
      }
    ]
  },
  {
    state: 'listening-situations',
    name: 'Hörsituationen',
    links: [
      {
        state: 'listening',
        stateParams: { situation: 'road' },
        image: 'images/overview-road.png',
        name: 'Straße',
        description: 'Ungestört Gespräche genießen: bestes Sprachverstehen im Straßenlärm oder in anderen lauten und anstrengenden Geräuschsituationen.'
      },
      {
        state: 'listening',
        stateParams: { situation: 'music' },
        image: 'images/overview-music.png',
        name: 'Musik',
        description: 'Brillanten Klang erleben: Konzertbesuche und Musical-Abende werden mit dem HD Musikprogramm zum Genuss.'
      },
      {
        state: 'listening',
        stateParams: { situation: 'restaurant' },
        image: 'images/overview-restaurant.png',
        name: 'Restaurant',
        description: 'Klar und fokussiert: ob in einem vollen Restaurant oder bei einer Familienfeier, mit HD Technologie verpassen Sie kein Gespräch mehr.'
      },
      {
        state: 'listening',
        stateParams: { situation: 'nature' },
        image: 'images/overview-nature.png',
        name: 'Natur',
        description: 'Natur pur: HD Technologie lässt in Vergessenheit geratene Töne wie das Zwitschern der Vögel und viele andere schöne Facetten der Natur wieder aufleben.'
      },
      {
        state: 'listening',
        stateParams: { situation: 'speaking' },
        image: 'images/overview-quiet-speech.png',
        name: 'Sprache in Ruhe',
        description: 'Mühelos hören bedeutet mühelos verstehen: Mit HD Technologie verstehen Sie Gesprächspartner und TV Sendungen in ruhiger Umgebung klar und deutlich.'
      },
      {
        state: 'listening',
        stateParams: { situation: 'telephone' },
        image: 'images/overview-telephone.png',
        name: 'Telefonieren',
        description: 'Angenehm und deutlich hören: HD Technologie ermöglicht müheloses Hören und Verstehen von Gesprächspartnern am Telefon.'
      }
    ]
  },
  {
    state: 'technology',
    name: 'Technologie',
    links: [
      {
        state: 'technology.performance-levels',
        stateParams: { level: 0 },
        image: 'images/overview-performance-levels.png',
        name: 'Performance Level',
        description: 'Alle Funktionen der unterschiedlichen Performance Level auf einen Blick.'
      },
      {
        state: 'technology.matrix',
        stateParams: { level: 0 },
        image: 'images/overview-technology-matrix.png',
        name: 'Technologie im Alltag',
        description: 'Unterstützung durch die unterschiedlichen Performance Level in Alltagssituationen.'
      }
    ]
  },
  {
    state: 'accessories',
    name: 'Zubehör',
    links: [
      {
        state: 'accessories.overview',
        stateParams: { accessory: 0 },
        image: 'images/overview-product-overview.png',
        name: 'Produktübersicht',
        description: 'Multimedia-Lösungen sorgen für mehr Komfort und Diskretion im Alltag.'
      },
      {
        state: 'accessories.feature',
        stateParams: { feature: 'TV' },
        image: 'images/overview-tv.png',
        name: 'TV',
        description: 'Komfortabel und angenehm: Die optimale Multimedia-Unterstützung beim Fernsehen.'
      },
      {
        state: 'accessories.feature',
        stateParams: { feature: 'remote' },
        image: 'images/overview-discretion.png',
        name: 'Fernbedienungen',
        description: 'Die Bedienung von Hörsystemen mit modernen Fernbedienungen ist besonders unauffällig.'
      },
      {
        state: 'accessories.feature',
        stateParams: { feature: 'telephone' },
        image: 'images/overview-telephone-accessory.png',
        name: 'Telefon',
        description: 'Perfekt vernetzt: Smartphones und Hörsystem-Versorgung ergänzen sich optimal.'
      },
      {
        state: 'accessories.feature',
        stateParams: { feature: 'lecture' },
        image: 'images/overview-lecture.png',
        name: 'Vortrag',
        description: 'Vortragssituationen meistern: Multimedia-Unterstützung im beruflichen Alltag.'
      }
    ]
  },
  {
    state: 'care',
    name: 'Pflege',
    links: [
      {
        state: 'product-care',
        stateParams: { type: 'cleaning' },
        image: 'images/overview-clean.png',
        name: ' Reinigen',
        description: 'Für die unkomplizierte Reinigung des Hörsystems stehen unterschiedliche Produkte zur täglichen Pflege zur Verfügung.'
      },
      {
        state: 'product-care',
        stateParams: { type: 'drying' },
        image: 'images/overview-dry.png',
        name: 'Trocknen',
        description: 'Eine schonende Trocknung verlängert die Lebensdauer des Hörsystems. Ob elektronisch oder nicht, die Optionen sind vielseitig.'
      }
    ]
  }
])
.constant('ACCESSORIES', [
  {
    name: 'uStream',
    descriptionTitle: 'uStream: \nClever streamen.',
    description: 'Sogenannte Streamer wie die uStream von HANSATON erlauben nicht nur das Verändern von Lautstärke und Programmen der Hörsysteme, sondern auch das Verbinden mit  bluetoothfähigen Geräten (z.B. Smartphones). Die uStream kann einfach und diskret per Clip an den Kleidungsstücken befestigt werden und so unauffällig als Freisprecheinrichtung genutzt werden.',
    image: 'images/accessory-uStream.png',
    features: ['RemoteHD App', 'Bluetooth']
  },
  {
    name: 'uMic2',
    descriptionTitle: 'uMic2 : Gesprächspartner leichter verstehen.',
    description: 'Drahtlose Mikrofonsysteme ermöglichen es, den Gesprächspartner in akustisch schwierigen Situationen einfacher und besser zu verstehen. uMic2 kann über einen integrierten Clip an der Kleidung eines Gesprächspartners angebracht werden. Sprachsignale des Gesprächspartners werden für den Hörsystemträger klar verständlich über die bluetoothfähigen Fernbedienungen wie die uDirect3 an seine Hörsysteme übertragen.',
    image: 'images/accessory-uMic.png',
    features: ['Bluetooth']
  },
  {
    name: 'RCV2',
    descriptionTitle: 'RCV2: \nEinfach, komfortabel und diskret.',
    description: 'Klassische Fernbedienungen wie die RCV2 ermöglichen die unauffällige Regelung der Lautstärke und der Hörsystemprogramme. Sie zeichnen sich besonders durch ihre einfache Handhabung aus.',
    image: 'images/accessory-RCV2.png',
    features: []
  },
  {
    name: 'uDirect3',
    descriptionTitle: 'uDirect3: \nMultimedialer Hörgenuss.',
    description: 'Multimedia Fernbedienungen wie die uDirect3 ermöglichen die Anbindung an Mobiltelefone, Fernsehgeräte, FM-Empfänger und MP3-Player. Je nach Belieben mit oder ohne Kabel. Sie sorgen damit für ein besonders klares und störungsfreies Hör-Erleben bei einer Vielzahl von Tätigkeiten.',
    image: 'images/accessory-uDirect3.png',
    features: ['Bluetooth', 'remoteHD App']
  },
  {
    name: 'uTV3',
    descriptionTitle: 'uTV3: \nDer volle TV-Genuss.',
    description: 'Audio-Transmitter wie die uTV3 senden Audiosignale des Fernsehers, der Stereoanlage oder einer anderen Audioquelle (z.B. des Computers) über die Streamer an die Hörsysteme –einfach über Bluetooth. uTV3 ermöglicht so ein ungetrübtes Fernsehvergnügen. Zusätzlich dient die uTV3 von HANSATON als Ladestation und Halterung für die Streamer uDirect3 und uStream.',
    image: 'images/accessory-uTV3.png',
    features: ['Bluetooth', 'Ladefunktion']
  }
])
.constant('ACCESSORY_FEATURES', [
  {
    state: 'TV',
    name: 'TV',
    background: 'images/accessory-feature-background-tv.jpg',
    accessories: [
      {
        name: 'uDirect3',
        description: 'Die uDirect3 ermöglicht die Übertragung von Audiosignalen via uTV3 - für einen besonders klaren und störungsfreien Hörgenuss. Die Lautstärke kann bequem mit der uDirect3 reguliert werden.',
        image: 'images/accessory-uDirect3.png'
      },
      {
        name: 'uStream',
        description: 'Freiheit beim Fernsehen: Über die uStream werden Audiosignale des TV’s via uTV3 an das Hörsystem übertragen- klar und störungsfrei.  Die Lautstärke kann bequem mit der uStream reguliert werden.',
        image: 'images/accessory-uStream.png'
      },
      {
        name: 'uTV3',
        description: 'Der volle TV-Genuss: Die uTV3 sendet Audiosignale des Fernsehers über die Streamer an die Hörsysteme -  komfortabel und einfach über Bluetooth.',
        image: 'images/accessory-uTV3.png'
      }
    ]
  },
  {
    state: 'remote',
    name: 'Fernbedienungen',
    background: 'images/accessory-feature-background-remote.jpg',
    accessories: [
      {
        name: 'uDirect3',
        description: 'Mit Multimedia-Fernbedienungen wie der uDirect3 von HANSATON können auch Lautstärke und Programme der Hörsysteme einfach und diskret verändert werden.',
        image: 'images/accessory-uDirect3.png'
      },
      {
        name: 'uStream',
        description: 'Auch Streamer wie die uStream von HANSATON erlauben das Verändern von Lautstärke und Programmen der Hörsysteme – einfach und diskret.',
        image: 'images/accessory-uStream.png'
      },
        {
        name: 'RCV2',
        descriptionTitle: 'RCV2: \nEinfach, komfortabel und diskret.',
        description: 'Klassische Fernbedienungen wie die RCV2 ermöglichen die unauffällige Regelung der Lautstärke und der Hörsystemprogramme. Sie zeichnen sich besonders durch ihre einfache Handhabung aus.',
        image: 'images/accessory-RCV2.png',
        features: []
      },
    ]
  },
  {
    state: 'telephone',
    name: 'Telefon',
    background: 'images/accessory-feature-background-telephone.jpg',
    accessories: [
      {
        name: 'uDirect3',
        description: 'Einen klaren und störungsfreien Hörgenuss beim Telefonieren bietet die uDirect3. Sie verbindet die Hörsysteme mit bluetoothfähigen Telefonen.',
        image: 'images/accessory-uDirect3.png'
      },
      {
        name: 'uStream',
        description: 'Einfach und angenehm verständlich telefonieren dank uStream. Sie verbindet die Hörsysteme mit bluetoothfähigen Telefonen.',
        image: 'images/accessory-uStream.png'
      },
      {
        name: 'remoteHD App',
        description: 'Die remoteHD App ermöglicht eine einfache und diskrete Lautstärkeregelung sowie Programmsteuerung der Hörsysteme mit dem Smartphone.',
        image: 'images/Hansaton_Application_Icon_FINAL.jpg'
      }
    ]
  },
  {
    state: 'lecture',
    name: 'Vortrag',
    background: 'images/accessory-feature-background-lecture.jpg',
    accessories: [{
      name: 'uMic2',
      panelHeight: 517,
      description: 'Vorträge lassen sich mit dem Partner-Mikrofonsystem leichter verfolgen. Sprachsignale des Gesprächspartners werden für den Hörsystemträger klar verständlich via uDirect3 oder uStream an seine Hörsysteme übertragen.',
      image: 'images/accessory-uMic.png'
    }]
  }
])
.constant('INFO_TOPICS', [
  {
    state: 'ear-infographic',
    navImageActive: 'images/info-ear-infographic.png',
    navImageInactive: 'images/info-ear-infographic-white.png',
    title: 'Reise durch das Ohr',
    descriptionTitle: 'So funktioniert unser Gehör',
    description: 'Unsere beiden Ohren sind wie Antennen, die Signale aus verschiedenen Richtungen empfangen. Die komplexen Strukturen des Ohrs verarbeiten diese Signale und leiten sie an das Gehirn weiter, wo sie interpretiert werden. Für ein optimales Erfassen von Geräuschen benötigen wir zwingend zwei funktionierende Ohren. Was passiert aber genau, wenn Schallwellen in das Ohr eindringen?',
    bottomNote: 'Quelle: Hear the World Foundation (www.hear-the-world.com)',
    startingImage: 'images/info-ear-infographic-starting.png',
    panelHeight: 424,
    items: [
      {
        coords: { x: 230, y: 270 },
        title: 'Außenohr',
        description: 'Am Ende des Gehörgangs treffen die Schallwellen auf das Trommelfell. Das Trommelfell ist eine dünne Membran zwischen dem Außen- und dem Mittelohr.',
        image: 'images/info-ear-infographic-item-1.png'
      },
      {
        coords: { x: 430, y: 200 },
        title: 'Mittelohr',
        description: 'Das Trommelfell ist direkt mit dem Hammer verbunden. Die drei kleinen Gehörknöchelchen - Hammer, Amboss und Steigbügel - sind die kleinsten Knochen im Körper des Menschen und leiten die mechanischen Schwingungen des Trommelfells in das Innenohr weiter.',
        image: 'images/info-ear-infographic-item-2.png'
      },
      {
        coords: { x: 480, y: 200 },
        title: 'Innenohr',
        description: 'Der Steigbügel überträgt die Schwingungen über das ovale Fenster an das Innenohr. So gelangen die Schallwellen in die Hörschnecke, die mit Flüssigkeit gefüllt ist.',
        image: 'images/info-ear-infographic-item-3.png'
      },
      {
        coords: { x: 520, y: 150 },
        title: 'Hörschnecke',
        description: 'Schall bewegt sich als Wanderwelle durch die flüssigkeitsgefüllte Hörschnecke und versetzt dabei die Haarzellen in Schwingung. Diese wandeln die mechanischen Schwingungen in elektrische Nervenimpulse um.',
        image: 'images/info-ear-infographic-item-4.png'
      }
    ]
  },
  {
    state: 'hearing-loss-causes',
    navImageActive: 'images/info-hearing-loss-causes.png',
    navImageInactive: 'images/info-hearing-loss-causes-white.png',
    title: 'Ursachen für Hörverlust',
    descriptionTitle: 'Ursachen für Hörverlust',
    description: 'Für Hörverlust gibt es verschiedene Ursachen. Die Gründe finden sich sowohl im Außen- als auch im Mittelohr oder im Innenohr.',
    startingImage: 'images/info-hearing-loss-causes-starting.png',
    panelHeight: 504,
    items: [
      {
        coords: { x: 230, y: 270 },
        title: 'Hörminderung im Außenohr',
        description: 'Hörminderungen im Außenohr werden meist durch Infektionen oder einen verstopften Gehörgang hervorgerufen. Schuld daran können Fremdkörper im Ohr, ebenso wie ein Überschuss an Ohrenschmalz (Cerumen) sein. Aus diesem Grund sollte auch auf Wattestäbchen verzichtet werden, da sie dem natürlichen Abtransportieren von Schmutz durch die Produktion von Cerumen entgegenwirken.',
        image: 'images/info-hearing-loss-causes-item-1.png'
      },
      {
        coords: { x: 430, y: 200 },
        title: 'Schallleitungsschwer-hörigkeit (Mittelohr)',
        description: 'Von einer Schallleitungsschwerhörigkeit spricht man, wenn die Schwingungen des Trommelfells nicht mehr über die Gehörknöchelchenkette ins Innenohr übertragen werden können. Erkrankungen  wie eine Mittelohrentzündung, ein Defekt des Trommelfells, oder eine unterbrochene Gehörknöchelchenkette  können ein Grund dafür sein. Hörsysteme können eine bereits eingetretene Minderung ausgleichen, wenn eine ärztliche Abklärung erfolgt ist.',
        image: 'images/info-hearing-loss-causes-item-2.png'
      },
      {
        coords: { x: 480, y: 200 },
        title: 'Schwerhörigkeit durch  Hörsturz  (Innenohr)',
        description: 'Im Falle eines Hörsturzes (auch Knalltrauma), kommt es innerhalb weniger Minuten zu einem Hörverlust. Der Hörverlust kann gering aber auch so hochgradig sein, dass Betroffene fast gar nichts mehr hören.  Die Ursachen können unterschiedlich sein.  Stress im Alltag oder im Beruf kann eine davon sein. In jedem Fall ist eine gründliche Untersuchung des Ohres notwendig. Falls nach einem Hörsturz trotz ärztlicher Behandlung ein Hörverlust zurückgeblieben ist, können Hörsysteme diesen ausgleichen.',
        image: 'images/info-hearing-loss-causes-item-3.png'
      },
      {
        coords: { x: 520, y: 150 },
        title: 'Altersschwerhörigkeit (Innenohr)',
        description: 'Altersschwerhörigkeit ist häufig ein Grund für schlechtes Sprachverstehen im Alter. Die Funktionsfähigkeit der Haarsinneszellen in der Hörschnecke nimmt mit dem Alter ab. Das Ergebnis ist eine schleichend eintretende Hörminderung, die im hochfrequenten Bereich beginnt. Hörsysteme können diese Minderung ausgleichen.',
        image: 'images/info-hearing-loss-causes-item-4.png'
      },
      {
        coords: { x: 540, y: 210 },
        title: 'Schwerhörigkeit durch Alltagslärm (Innenohr)',
        description: 'Ob beruflich oder privat, der Alltag wird immer lauter. Bauarbeiten, Straßen- und Flughafenlärm oder ein Konzert sind eine große Belastung für unser Ohr und können das Hörvermögen bereits nachhaltig schädigen. Es empfiehlt sich ein Gehörschutz zur Prävention. Hörsysteme können eine bereits eingetretene Hörminderung kompensieren.',
        image: 'images/info-hearing-loss-causes-item-5.png'
      }
    ]
  },
  {
    state: 'hearing-loss-meaning',
    navImageActive: 'images/info-meaning-of-hearing-loss.png',
    navImageInactive: 'images/info-meaning-of-hearing-loss-white.png',
    title: 'Was bedeutet Hörverlust?',
    description: 'Man unterscheidet allgemein zwischen leichtem, mittlerem, starkem und hochgradigem Hörverlust.',
    startingImage: 'images/info-hearing-loss-meaning-starting.png',
    panelHeight: 242,
    items: [
      {
        description: 'Hörverlust betrifft anfangs nur hohe Töne (hohe Frequenzen gemessen in kHz) wie beispielsweise Vogelgezwitscher oder das Rascheln von Blättern.',
        image: 'images/info-hearing-loss-meaning-item-1.png'
      },
      {
        description: 'Sprache wird zunehmend undeutlich und unverständlich. Die Wahrnehmung von Konsonanten wird erschwert, da sie im hochfrequenten Bereich liegen.',
        image: 'images/info-hearing-loss-meaning-item-2.png'
      },
      {
        description: 'Mit zunehmendem Hörverlust werden auch Vokale undeutlich und das Sprachverstehen dadurch weiter verschlechtert.',
        image: 'images/info-hearing-loss-meaning-item-3.png'
      },
      {
        description: 'Es wird anstrengender, Telefonaten und Gesprächen zu folgen.',
        image: 'images/info-hearing-loss-meaning-item-4.png'
      },
      {
        description: 'Auf der Grundlage von Ergebnissen einer audiometrischen Messung lässt sich der individuelle Hörverlust berechnen. Er ist Grundlage für die Auswahl des Hörsystems.',
        image: 'images/info-hearing-loss-meaning-item-5.png'
      }
    ]
  },
  {
    state: 'hearing-aid-reasons',
    navImageActive: 'images/info-hearing-aid-reasons-white.png',
    navImageInactive: 'images/info-hearing-aid-reasons.png',
    title: 'Warum ein Hörsystem',
    noStart: true,
    panelHeight: 444,
    items: [
      {
        title: 'Sprachverständnis und Klang verbessern',
        description: 'Laute Straßen, hallende Restauranträume, klapperndes Geschirr oder laute Hintergrundgeräusche beim Fernsehen. All das sind Geräusche, die bei einem Hörverlust  besonders störend sind und von Konversationen ablenken oder diese gar unmöglich machen. Neben dem Sprachverständnis leidet die Klangqualität. Hörsysteme können mittels unterschiedlicher Programme und Funktionen Sprachverständnis und Klangqualität erheblich verbessern.',
        svgAnimation: ['M2.5,402.973h83.461c0,0-5.709-3.172-5.709-4.758\n\n   s0-1.586,0-1.586l-13.743-2.115l-0.212-2.748c0,0-1.269-2.113-1.269-3.805c0-1.693,1.692-2.75,2.538-4.865\n\n    c0.846-2.113,0.633-4.861,1.691-6.553c1.058-1.693,13.241-1.799,22.967-5.182c4.011-1.393,8.01-6.041,13.115-7.514\n\n    c7.277-2.102,23.567-2.715,31.023-1.473c12.687,2.115,20.01,10.783,20.01,10.783s30.237,4.652,33.197,7.613\n\n   c2.96,2.959,3.807,16.07,3.807,16.07l-19.454,1.689c0,0-1.903,4.23-4.44,4.441s88.385,0.094,88.385,0.094l10.148,0.033\n\n    c-5.074-1.301-4.743-11.482-4.743-11.482l-10.564-0.998v-19.764c0,0,3.879-3.793,6.898-4.791s4.099-19.963,14.015-21.361\n\n    c9.916-1.395,32.455-1.992,34.527,0c2.071,1.994,12.07,16.568,13.797,19.166c1.725,2.594,14.875,2.195,18.109,7.385\n\n   c3.233,5.191,0,19.764,0,19.764l-12.072,3.395c0,0-1.009,4.838-4.672,6.234c-3.665,1.398-2.75,2.453-2.75,2.453l76.199,0.084\n\n    l2.996-0.738v-60.348h-7.137v-9.205c0,0-2.854-0.43-3.568-1.428c-0.713-0.998-0.961-2.266-2.14-2.854\n\n   c-2.284-1.143-2.284-3.428-2.284-3.428h7.992v-7.492c0,0-2.854-0.428-3.568-1.428c-0.713-0.998-0.961-2.266-2.14-2.854\n\n    c-2.284-1.141-2.284-3.426-2.284-3.426h7.992v-7.494c0,0-2.854-0.426-3.568-1.426c-0.713-1-0.961-2.266-2.14-2.855\n\n    c-2.284-1.141-2.284-3.424-2.284-3.424h7.992v-2.07h18.271v2.07h7.992c0,0,0,2.283-2.283,3.424\n\n   c-1.179,0.59-1.428,1.855-2.141,2.855s-3.568,1.426-3.568,1.426v7.494h7.992c0,0,0,2.285-2.283,3.426\n\n   c-1.179,0.588-1.428,1.855-2.141,2.854c-0.713,1-3.568,1.428-3.568,1.428v7.492h7.992c0,0,0,2.285-2.283,3.428\n\n    c-1.179,0.588-1.428,1.855-2.141,2.854s-3.568,1.428-3.568,1.428v9.205h-7.136v60.348l0.75,0.738H506.5c0,0-1.033-0.527-2.302-2.51\n\n    s-1.348-2.459-1.348-2.459l-8.008-0.316c0,0-8.271-12.053-8.061-14.379c0.211-2.324-0.212-8.15,1.691-11.475\n\n    c1.902-3.326,14.377-8.824,14.377-8.824s12.476-9.938,15.014-10.994c2.537-1.057,40.384-3.172,45.248-1.27\n\n    c4.865,1.902,16.917,11.842,20.511,13.533s29.813,8.248,32.14,9.092c2.327,0.846,8.881,9.727,10.149,11.842\n\n   c1.269,2.113-1.058,7.609,0,8.668c1.059,1.059-8.563,3.648-8.563,3.648s-2.061,5.443-4.439,5.443c-2.38,0,55.091,0,55.091,0\n']
      },
      {
        title: 'Entlastung im Alltag',
        description: 'Der Organismus des Menschen kann den Hörverlust bis zu einem gewissen Grad kompensieren. Die Kompensation der Hörminderung ist jedoch anstrengend. Müdigkeit ist daher oft eine Begleiterscheinung des Hörverlustes. Ein Hörsystem kann akustisch anspruchsvolle Situationen verbessern, den Alltag erleichtern und damit das persönliche Wohlbefinden erhöhen.',
        svgAnimation: ['M2.5,403.166h122.333\n\n    c0,0-14.666-20.666-14.666-24.666s0-4,0-4s-2.667-16,3.333-34.668c6-18.666,25.333-80,26-94.666s-3.333-22.666-9.333-29.334\n\n   c-6-6.666-10.668-10.666-9.334-12.666s-5.333-4-2.666-7.334c2.666-3.332,1.999-8.666,10.666-17.332\n\n   c8.667-8.668,12-11.334,15.334-12.668c3.333-1.332,4-3.332,5.333,0c1.333,3.334-1.334,8-2.667,12s-4.666,10.002-1.333,14.668\n\n    c0.903,1.266,2.103,2.973,3.436,4.867c3.582,5.094,4.136,13.385,6.564,16.299c1.468,1.762,7.065,1.982,8.083,5.166\n\n    c1.344,4.207,4.75,6.766,4.75,9.75c0,1.443-0.25,4.596-0.25,8.25c0,9.863,1.417,25.525,1.417,32.334c0,9.334,6.667,79.334,8,84.666\n\n    c1.333,5.334,0-38.666,0-43.332c0-4.668-2.667-8,4-7.334s7.333,8,13.333,3.334c6-4.668,7.167-9.668,8.5-11.668\n\n    c0.26-0.391,6.66-0.984,4.334-2.166c-3.181-1.615-11.875-8.932-16.167-14.834c-5.333-7.332-23.26-33.039-22.167-43.832\n\n    c0.813-8.025-3.139-12.35-5.5-18.273c-0.598-1.5-6.334-3.809-7-5.227c-4.771-10.164-8.254-16.184-9.25-20.168\n\n   c-2.667-10.666,1.917-22.5,4.584-31.166c2.666-8.666,3.999-6.667,18.666-17.334c14.667-10.666,19.333-14,28-12.666\n\n    s11.333-0.557,18-0.278s13.334,2.278,19.334,4.945s14.666,8,19.333,12.667c4.667,4.666,12,28,14.667,34.666\n\n   c2.666,6.666,0,7.334,0,11.334s-2.667,12.666-2.667,12.666s0.667-14,6.667-13.334c6,0.668,10.666,10.668,10,18.668\n\n    c-0.667,8-0.783,17.906-4,22c-4.584,5.832-10,2.666-10,2.666s11.666,30.791,14.063,43.334c1.145,5.99-0.603-3.334,0-8\n\n   c0.604-4.668-2.1-16.666,1.919-14s4.685,7.691,12.685,7.846s6,3.18,14.667,0s14.667-2.514,18.667-3.18s6.666-4,10-4\n\n   c3.333,0,7.333,2.666,10,4c2.666,1.334,4.666,3.693,14,3.18c9.333-0.514,7.333-5.18,17.333-5.18s12.667,2.359,16.667,5.18\n\n   s4.666,9.488,4.666,12.154s4.666,2.666,12,6c7.334,3.332,20.667,6.666,24.667,12.666s12,10.666,18,12.666\n\n   s45.334,17.334,58.667,21.334s23.334,6.666,34,10.666s20.667,14.002,26,16.668s8.666,8.666,10.666,12.666s2,18.668,0,23.334\n\n   S577.5,403.166,577.5,403.166H668\n', 'M237.833,255.5c-4.666,2-9.334,1.666-13,3.666\n\n    s-4,3.666-8.666,4.666c-4.667,1-8.667,0.361-10.667,2.182c-2,1.818-5.333,0-5.333,0s2.666-0.514,6-3.182\n\n    c3.333-2.666,2.999-4,6.666-5.332c3.667-1.334,0.334-2,6.167-2s5.499,0.666,9.833,0C233.167,254.832,237.833,255.5,237.833,255.5z\n', 'M195.769,215.727\n\n   c1.667,3.332,2.564,11.48,1.564,15.48c0,0-0.625,6.375-1.109,9.367c2.701,2.703,3.609,3.342,6.609,4.008c3,0.668,5.667,0,5.667,0\n', 'M168.54,228.314c-0.006-0.006,0.024,0.18,0.276,0.277c0.238,0.119,0.65,0.088,1.143,0.033\n\n      c0.252-0.055,0.527-0.102,0.823-0.178c0.296-0.086,0.616-0.178,0.958-0.277c0.598-0.262,1.475-0.547,2.114-0.998\n\n      c0.354-0.184,0.704-0.463,1.065-0.748c0.367-0.262,0.727-0.594,1.097-0.922c0.739-0.662,1.509-1.436,2.379-2.182\n\n      c0.45-0.363,0.909-0.738,1.39-1.1c0.508-0.334,1.009-0.684,1.556-0.996c0.515-0.281,1.034-0.566,1.555-0.852\n\n      c0.558-0.27,1.101-0.563,1.675-0.814c1.144-0.49,2.41-0.887,3.729-0.994c1.335-0.131,2.568,0.205,3.67,0.436\n\n      c0.271,0.064,0.56,0.131,0.872,0.23c0.16,0.055,0.317,0.104,0.532,0.221c0.057,0.033,0.098,0.051,0.162,0.098\n\n     c0.072,0.055,0.141,0.113,0.205,0.176c0.051,0.035,0.163,0.199,0.219,0.324c0.066,0.127,0.096,0.283,0.088,0.459\n\n      c-0.006,0.184-0.053,0.328-0.097,0.4c-0.046,0.094-0.102,0.184-0.162,0.266c-0.089,0.096-0.177,0.176-0.271,0.256\n\n     c-0.151,0.104-0.313,0.217-0.444,0.275c-0.278,0.148-0.536,0.248-0.792,0.352c-0.957,0.359-1.863,0.697-2.699,1.01\n\n      c-0.804,0.357-1.54,0.686-2.193,0.977c-0.662,0.309-1.25,0.557-1.75,0.732c-0.989,0.367-1.556,0.557-1.556,0.557\n\n      s0.499-0.344,1.374-0.91c0.891-0.549,2.052-1.439,3.65-2.4c0.793-0.438,1.638-0.891,2.573-1.33\n\n     c0.208-0.111,0.426-0.223,0.601-0.342c0.104-0.059,0.148-0.115,0.215-0.162c0.002-0.012,0.012-0.023,0.016-0.023\n\n      c-0.027,0.023-0.051,0.057-0.063,0.092c0,0.016-0.04,0.096-0.049,0.211c-0.001,0.107,0.029,0.195,0.05,0.268\n\n      c0.018,0.07,0.115,0.16,0.104,0.162c0.013,0.02,0.029,0.035,0.049,0.047c0.01,0.006-0.014,0-0.017,0\n\n      c-0.022-0.012-0.128-0.047-0.231-0.07c-0.213-0.055-0.467-0.102-0.744-0.148c-1.083-0.178-2.142-0.346-3.158-0.234\n\nc-1.02,0.105-2.049,0.439-3.086,0.902c-0.52,0.215-1.032,0.48-1.549,0.715c-0.525,0.275-1.049,0.549-1.567,0.82\n\n     c-0.476,0.277-0.948,0.553-1.415,0.826c-0.455,0.303-0.896,0.621-1.335,0.934c-0.854,0.672-1.695,1.34-2.544,1.969\n\n      c-0.432,0.309-0.83,0.625-1.285,0.869c-0.437,0.256-0.854,0.506-1.323,0.68c-0.919,0.445-1.659,0.523-2.438,0.707\n\n     c-0.371,0.037-0.719,0.072-1.039,0.105c-0.325,0.014-0.627,0.002-0.894,0.002c-0.542-0.043-0.976-0.141-1.216-0.336\n\n     C168.512,228.498,168.538,228.303,168.54,228.314z\n', 'M241.5,201.5c-0.916,0.67-1.891,1.267-2.918,1.777c-0.515,0.254-1.045,0.482-1.589,0.697\n\n     c-0.534,0.196-1.208,0.335-1.798,0.371c-1.223,0.076-2.32-0.063-3.422-0.062c-1.1-0.009-2.194,0.007-3.293,0.079l-0.823,0.063\n\n     l-0.812,0.09c-0.557,0.063-1.016,0.135-1.529,0.26c-1.006,0.225-1.883,0.645-2.779,1.207c-0.896,0.553-1.846,1.247-2.859,1.832\n\n      c-0.502,0.303-1.031,0.568-1.563,0.812c-0.53,0.255-1.074,0.464-1.615,0.683l0.537-0.705c-0.012,0.02,0.006,0.211,0.036,0.268\n\n     c0.032,0.076,0.065,0.125,0.151,0.188c0.076,0.067,0.24,0.106,0.41,0.143c0.186,0.02,0.389,0.028,0.607,0.009\n\n     c0.23-0.014,0.414-0.052,0.704-0.095l0.761-0.119c0.505-0.067,1.076-0.109,1.588-0.141c1.045-0.063,2.046-0.051,3.045-0.178\n\n     c0.246-0.039,0.504-0.042,0.75-0.096l0.747-0.139c0.499-0.1,0.991-0.24,1.496-0.361l-0.685,0.364\n\n     c-0.23,0.116-0.455,0.259-0.699,0.345c-0.482,0.196-0.967,0.408-1.475,0.543c-1.007,0.305-2.054,0.482-3.043,0.66\n\n c-0.504,0.099-0.951,0.188-1.449,0.322l-0.744,0.195c-0.213,0.051-0.527,0.145-0.807,0.187c-0.288,0.054-0.598,0.077-0.924,0.071\n\n      c-0.336-0.029-0.691-0.068-1.063-0.26c-0.365-0.174-0.717-0.501-0.905-0.889c-0.189-0.405-0.271-0.734-0.243-1.226l0.027-0.462\n\n      l0.51-0.244c0.49-0.234,0.984-0.457,1.456-0.719c0.479-0.25,0.938-0.527,1.398-0.807c0.927-0.559,1.784-1.214,2.79-1.865\n\n    c0.994-0.658,2.201-1.172,3.4-1.42c0.582-0.135,1.24-0.221,1.802-0.27l0.872-0.047l0.861-0.016\n\n     c1.151-0.006,2.311,0.019,3.458,0.156c1.146,0.117,2.28,0.334,3.312,0.418c0.535,0.029,0.986,0.008,1.533-0.11\n\n      c0.533-0.114,1.068-0.243,1.602-0.403C239.383,202.288,240.446,201.918,241.5,201.5z\n']
      },
      {
        title: 'Töne erhalten',
        description: 'Ein Hörverlust führt dazu, dass gewisse Schallsignale nicht mehr an das Gehirn weitergeleitet werden und das Gehirn diese Signale (bspw. hohe Töne oder Sprache) nicht mehr erkennt. Die frühzeitige Nutzung von Hörsystemen lässt Töne erst gar nicht in Vergessenheit geraten.',
        svgStatic: [
          { tag: 'circle', fill: '#3D967D', cx: '368.829', cy: '264.443', r: '7.179' }
        ],
        svgAnimation: ['M313.027,253.463l18.895,19.693l3.008-3.016l-16.273-17.279l4.822,0.998l0.598-2.008l-4.014-3.818\n\n    l-3.82-6.031c0,0-2.811-8.639-5.834-11.25c-3.008-2.617-7.432-8.244-11.248-9.852c-3.818-1.611-7.84-7.031-11.857-7.23\n\n    c-4.02-0.207-8.24-0.207-10.852,0.598c-2.611,0.807-3.619,5.021-3.619,5.021c-5.828,2.414-7.033,2.621-7.033,2.621l7.641,3.016\n\n    c0,0,0,8.232,0.4,10.447c0.398,2.213,6.631,10.25,9.443,12.459c3.215,3.416,7.834,7.037,7.834,7.037\n\n    c-4.219,4.42-8.637,6.635-8.637,6.635s-2.01-0.205-3.021-0.809c-1-0.604-2.807,1.809-2.807,1.809s2.807-1.406,4.219,0\n\n   c-2.215,0.602-3.414,0.396-4.42,1.406c-1.004,1.006-0.604,2.412-0.604,2.412s0.805-1.406,2.207-2.01\n\n    c1.404-0.604,4.229-1.004,4.229-1.004l1.406-1.004l0.604,1.404c0,0,1.607,0.604,1.398,2.209c-0.191,1.609,0.807,2.016,1.207,0.207\n\n   c0.404-1.813-0.998-3.42-0.998-3.42l7.83-7.232c1.611,1,5.631,1.602,5.631,1.602l-9.441,10.652c0,0-3.422,0.207-4.229,0.609\n\n   c-0.803,0.395,3.422,0.797,3.422,0.797c-1.607,2.016-3.422,3.016-3.422,3.016v1.811c0,0,0.604-1.605,1.611-2.01\n\n   c1.002-0.404,3.814-2.213,3.814-2.213l1.004-0.604l1.609,0.811c0,0,3.217,0,4.018,1.602c0.609-1.404-3.215-2.814-3.215-2.814\n\n    l-1.404-0.6l8.246-11.057L313.027,253.463\n', 'M2.5,402.666h172.91l1.305-1.018\n\n   c-3.061-2.703-4.986-6.633-4.986-11.006c0-8.152,6.701-14.764,14.966-14.764c1.598,0,3.138,0.246,4.581,0.705l-0.049-0.988\n\n    c0-6.469,5.243-11.713,11.712-11.713c1.8,0,3.499,0.418,5.022,1.145c-1.028-2.451-1.6-5.143-1.6-7.969\n\n    c0-11.227,8.98-20.338,20.148-20.586c-1.338-3.855,2.016-17.416,5.953-13.625c4.813,5.25-6.467,4.813-6.854,4.813\n\n   c-28.671,0-51.912-17.063-51.912-38.109c0-23.855,34.996-40.5,34.996-37.135c-0.777,10.109-34.996-8.076-34.996-34.025\n\n    c0-25.34,25.592-45.884,57.162-45.884c0.131,0,12.715,2.608,10.5,5.833c-2.139,3.111-4.74-0.572-8.516-5.47\n\n   c-3.791-30.331,26.021-48.192,56.732-48.192c25.275,0,53.467,24.789,39.662,24.498c-9.027-0.191,8.945-24.498,35.387-24.498\n\n   c21.689,0,39.273,13.58,39.273,30.33c0,4.111-6.805,19.541-9.848,11.666c3.918-6.416,22.602-8.166,32.014-8.166\n\n   c24.816,0,45.15,17.131,45.15,35.386c0,6.161-5.982,30.44-10.311,20.856c-3.5-7.75,46.148,3.148,46.148,37.277\n\n    c0,35.969-55.422,42.969-54.158,38.303s8.619,13.631,8.619,18.664c0,24.482-26.039,44.33-58.164,44.33\n\n    c-12.537,0-46.646-13.707-34.498-15.555c12.15-1.848,6.436,23.494-37.064,29.648c-25.373,3.762-55.432-13.512-45.545-14.611\n\n   c4.842,4.018-15.43,10.594-24.857,8.295c-7.973-1.945-9.574-4.084-13.027-6.32c-0.885,10.566-10.592,22.887-21.387,22.887\n\n   c-4.723,0-9.059-1.605-12.534-4.275c0.136,0.715,0.214,1.449,0.214,2.203c0,6.469-5.244,11.713-11.712,11.713l-1.693-0.133\n\n    c0.271,1.111,0.415,2.273,0.415,3.467c0,4.078-1.676,7.77-4.384,10.443l-1.116,1.58H668\n', 'M353.326,229.754c-4.119,0.057-6.945-5.926-3.648-10.82c3.297-4.893,8.709-10.072,20.008-10.072\n\n      c11.297,0,16.711,6.492,18.123,10.072s3.297,9.881-2.334,16.02c-5.154,5.617-10.611,7.803-11.789,10.861\n\n      c-1.176,3.061-1.988,5.771-5.818,5.885c-3.832,0.113-6.285-2.771-5.773-6.826c0.471-3.746,4.592-7.902,6.844-9.297\n\n      c3.66-2.264,7.531-6.332,7.531-10.354c0-3.648-2.639-6.748-7.564-6.875c-4.539-0.119-7.457,2.895-8.635,6.191\n\n     C359.096,227.834,357.445,229.699,353.326,229.754z\n']
      },
      {
        title: 'Moderne Chiptechnologie individuell angepasst',
        description: 'Individualität steht im Vordergrund: Mittels moderner Chiptechnologie ist es möglich, eine Lösung zu finden, die Ihren audiologischen Bedürfnissen und Ihren persönlichen Wünschen entspricht - von der Basisversorgung bis hin zum Highend-Hörsystem. Zusammen mit Ihrem Hörgeräteakustiker finden Sie das richtige Hörsystem für Ihre Anforderungen.',
        svgAnimation: ['M654.761,408.647H525.615   l-0.553-4.44l1.041-0.07c6.393-1.448,11.203-7.708,11.203-15.213v-2.677V385.011l5.18,2.605c0,0.018-0.005,0.033-0.005,0.052   c0,1.613,1.31,2.923,2.923,2.923c1.616,0,2.923-1.31,2.923-2.923c0-1.616-1.308-2.923-2.923-2.923   c-0.737,0-1.406,0.284-1.923,0.737l-6.174-3.106v-2.196c9.371-9.08,18.745-17.332,18.745-23.604   c0-6.271-5.084-11.358-11.358-11.358h-21.416c-7.749,0-14.029,6.953-14.029,15.528v28.177c0,7.683,5.042,14.062,11.665,15.307   l0.573,4.416H356.251l-0.963-3.042c12.136-1.686,9.802-17.78,13.484-50.228c4.045-35.648,20.564-53.936,24.271-64.049   c0.332-0.904,0.469-1.805,0.456-2.697l0.004-3.034c0,0,6.872-3.034,11.422-3.792c4.551-0.758,11.124-0.506,17.951,2.781   s15.928,18.709,15.928,18.709l2.023,1.264l5.309,14.158l8.596-2.781l-5.562-16.686v-2.781c0,0-3.287-9.355-6.321-13.4   c-3.034-4.045-5.915-12.281-25.394-18.1c-15.878-4.742-33.577,4.283-39.14,7.906c-1.962-0.916-3.542-1.522-4.234-1.436   c-6.068,0.758-17.782,8.09-38.008,31.013c-20.226,22.923-27.477,62.953-23.432,82.505c2.814,13.6,16.477,19.086,28.619,20.598   l0.236,2.17l-0.099,0.921H170.072l-1.707-4.037c0,0,4.174-1.992,5.764-3.185c1.591-1.193,7.952-6.559,7.356-11.926   c0,0-0.895-16.599-1.094-25.147c-0.199-8.547,1.392-25.047,5.566-35.085c4.174-10.038,10.036-19.359,10.735-20.177   c1.557-1.821,0.762-6.062,0.762-6.062s4.615-4.822,3.444-8.101c2.048-0.457,5.035-0.14,9.096,2.595   c8.383,5.642,7.547,25.851,2.388,42.899c-0.507,1.677-1.011,3.318-1.502,4.918c-4.212,13.726-7.257,23.642-4.897,29.435   c4.233,10.39,14.709,12.231,15.085,12.305l0.505,2.356c0.663,2.651,1.988,2.65,2.783,2.784c0.795,0.133,4.771,0,4.771,0   l3.048-2.916c0,0,3.711,0.663,7.767,0c0.581-0.094,1.178-0.337,1.779-0.666c3.115-1.234,5.616-3.779,6.883-7.008   c0.513-0.729,1.193-2.883,0.83-3.402c0.021-0.194,0.029-0.391,0.041-0.587c0.438,0.022,0.999-0.117,1.652-0.661   c1.59-1.327,5.698-10.868,4.24-12.759c-1.458-1.892-10.545,0.022-14.047,0.566c-0.015,0.003-0.025,0.004-0.039,0.006   c-3.783-1.309-8.384-0.707-10.165,0.391c-1.235,0.384-3.577,1.595-5.036,3.843c-2.323,3.578-2.65,6.362-2.65,6.362l-4.108,2.783   l0.911,5.005c-0.071-0.013-7.135-1.482-10.566-9.903c-1.825-4.479,1.345-14.808,5.015-26.767c0.492-1.604,0.997-3.251,1.507-4.933   c4.171-13.785,8.029-39.27-3.974-47.349c-6.72-4.522-11.937-3.852-15.148-2.027c-1.482-0.045-2.572,0.786-2.572,0.786   s-1.413-2.181-6.847-2.181c-3.392,0-23.456,9.577-34.455,28.264c-10.999,18.686-18.819,40.612-15.771,64.273   c3.048,23.659,18.023,21.274,18.023,21.274l1.771,4.037h-9.05H-9.768']
      },
      {
        title: 'Feinste Technik für mehr Diskretion',
        description: 'Beste Technik auf kleinstem Raum gebündelt: Hörsysteme sind in den letzten Jahren bei steigender Leistung  immer kleiner und unauffälliger geworden. Moderne Hörsysteme sind heute kaum noch sichtbar und auch farblich ideal auf Sie abgestimmt- sei es auf Ihre Haarfarbe, Ihren Hautton oder auf Ihre ästhetischen Ansprüche.',
        svgAnimation: ['M-11.34,407.668h395.672c0,0,0-3-1-6s-8-24-12-32.5\n    s-6.5-13.5-13-19s-10-9.25-17.75-10.75s-22-0.25-31-2s-21.5-7.25-29-10.75s-7.75-3.25-12.25-4.25s-17.25-5.75-23-8.75\n   s-11.25-4-18.75-5.75s-17-2.75-24.25-7s-14.5-6-25.25-9.75s-11-8.25-12.75-10.75s2.75-8,5-11.25\n    c1.841-2.66,2.343-3.646,1.779-4.464l-2.419-1.004c0,0-10.338-2.756-10.492-16.163c-0.155-13.404,2.049-21.884,7.448-30.514\n c5.397-8.627,12.856-15.521,17.065-16.78c4.21-1.26,4.915,0.842,4.915,0.842s1.301-1.023,2.305-0.592\n   c0.625,0.269,6.669-3.375,10.161,3.02c3.493,6.394,3.168,15.105-0.632,28.69c-3.798,13.584-1.208,15.204-0.262,16.516\n   c1.546,2.137,4.981,1.905,4.981,1.905l-0.561-3.023l2.29-1.554c0,0,0.552-2.987,2.609-4.683s4.387-2.341,6.154-2.039\n    c1.766,0.298,2.994,0.473,4.115,0.041c1.124-0.433,2.931-0.669,3.492-0.312c1.201,0.763,2.229,2.106,0.585,4.468\n    c-1.645,2.361-1.758,3.283-2.021,4.134c-0.599,1.93-2.293,4.531-4.333,5.153c-2.079,0.633-5.773,0.485-5.773,0.485l-1.296,1.661\n   c0,0-2.483,0.647-3.283-0.154s-1.546-2.142-1.546-2.142s-5.646-0.146-7.647-3.94c-2.002-3.795-2.452-6.953,0.965-18.92\n    c3.417-11.966,3.173-15.31,2.562-19.014c-0.727-4.391-3.031-8.522-5.112-9.037c-2.08-0.515-3.911,0-3.911,0\n   s0.421,0.893-0.139,1.987c-0.559,1.092-1.24,2.875-1.24,2.875s0.827,1.411-1.005,4.695c-1.831,3.284-7.285,14.039-7.316,21.703\n    c-0.032,7.665,3.333,23.486-0.828,26.839c-5.026,4.054-6.948,4.479-6.948,4.479l2.229-0.104c0.959,0.051,2.273,0.42,3.86-0.056\n    c2.5-0.75,13.25,0.5,13.25,0.5c4,0.5,9.5,0.5,13.5,1.5s7.5,1.5,14,3.5s14.5,3.5,22.264,5.5s11.236,3,16.182,0\n   c4.944-3,12.055-4.5,15.055-8s12-15.5,13-18.006s-0.5,1.506,1-4.494s-1-10-3.5-9.5s-5-2-8.044-2s-6.956,0-9.456-2.5s-1-7-1-5\n    s-3,4.5-7.055,5.5c-4.056,1-4.945,3.833-8.945,0.5s6.875,2.405,8.945,5.5c1.398,2.092,1.805,4.75-1.556,7.5\n   c-1.464,1.198,6.396-1.015,8.481-2.366c0.254-1.509,7.142-3.358,10.629-3.884c4.83-0.728,9.625,1.75,10.25,5.25\n   c0.25,2.125-5.5,11.25-5.5,11.25s-10.453,7.331-11.065,7.951c-1.546,1.569-12.685,5.299-17.185,6.299s-6.5-2.5-10.236-6\n   s-9.764-11.5-12.764-16.5s-7.5-15-12-18.5s-2-11-1-15s21-9.5,25.764-11.5c3.023-1.27,8.768-2.882,14.236-1.25\n   c1.01,0.301-3.443-1.062-5.469-1.632c-1.485-0.417-2.87-0.801-4.031-1.118c-5.5-1.5-14-9.5-16.5-10s-5,1.5-10.5,2.5s-17,0-20.5,0.5\n    c-2.251,0.321-9.463,3.95-15.522,6.634c-3.364,1.49-6.372,2.688-7.978,2.866c-4.5,0.5-3-0.5-11-1.5s-6.5-11.5-4.5-13s9.5-5,12-7\n   s13.5-8,17.5-9.5s26-6,29.5-7s11.5-5,15.5-6s15.5,4,34,11.5s27.5,9.5,37,11s16.5,16.5,19,22s15.5,26.5,19,32.5s27,37.5,29.5,39.5\n    c0.885,0.708,15.211,18.167,29.668,40c21.963,33.165,47.955,76.855,56.996,90.667l8.67,4.333H855.84']
      },
      {
        title: 'Mehr Komfort durch Zubehör',
        description: 'Mit modernem Zubehör können Sie Ihr Hörsystem optimal in Ihren Alltag integrieren. Bedienen Sie das Hörsystem mit einer Fernbedienung, verbinden Sie es mit dem TV-Gerät, Smartphone oder MP3 Player. Die Möglichkeiten sind vielseitig und dabei ganz einfach zu bedienen.',
        svgStatic: [
          { tag: 'circle', fill: 'none', stroke: '#3D967D', 'stroke-width': '3', cx: '375.857', cy: '394.66', r: '5.414' },
          { tag: 'rect', fill: 'none', stroke: '#3D967D', 'stroke-width': '3', x: '497.359', y: '311.992', width: '45.83', height: '37.238' },
          { tag: 'circle', fill: 'none', stroke: '#3D967D', 'stroke-width': '3', cx: '520.274', cy: '379.307', r: '7.161' }
        ],
        svgAnimation: ['M292.67,332.229\n\n     c0,10.732-9.752,19.434-21.777,19.434h-117.51c-12.027,0-21.777-8.701-21.777-19.434v-67.207c0-10.732,9.75-19.434,21.777-19.434\n\n      h117.51c12.025,0,21.777,8.701,21.777,19.434V332.229z\n', 'M402.002,384.477c0,0.707-0.574,1.279-1.285,1.279\n\n      h-49.721c-0.707,0-1.281-0.572-1.281-1.279v-86.998c0-0.705,0.574-1.277,1.281-1.277h49.721c0.711,0,1.285,0.572,1.285,1.277\n\n      V384.477z\n', 'M533.523,379.307\n\n         c0,7.316-5.934,13.248-13.25,13.248c-7.314,0-13.248-5.932-13.248-13.248s5.934-13.248,13.248-13.248\n\n         C527.59,366.059,533.523,371.99,533.523,379.307z\n', 'M0,403.715l197.992-0.404v-4.906v-33.992h-72.918\n\n      c-1.137,0-2.063-0.949-2.063-2.119V235.686c0-1.17,0.926-2.119,2.063-2.119h76.496l-16.094-43.779\n\n      c-2.223,0.37-3.467-0.871-4.271-3.064c-0.912-2.48,0.361-5.23,2.84-6.143c2.48-0.912,5.23,0.36,6.143,2.84\n\n      c0.807,2.192-0.098,4.592-2.031,5.75l16.322,44.396h15.316l16.322-44.396c-1.934-1.158-2.838-3.558-2.031-5.75\n\n      c0.912-2.479,3.664-3.752,6.143-2.84c2.48,0.912,3.754,3.662,2.842,6.143c-0.805,2.193-2.049,3.435-4.273,3.064l-16.092,43.779\n\n      h76.494c1.141,0,2.064,0.949,2.064,2.119v126.607c0,1.17-0.924,2.119-2.064,2.119h-72.916v33.275v5.623h125.584l1.791-1.432\n\n     c-5.896,0-10.383-5.369-10.383-11.994v-93.813c0-6.625,4.486-11.994,10.025-11.994h45.115c5.535,0,10.025,5.369,10.025,11.994\n\n     v93.813c0,6.625-4.49,11.994-9.668,11.994h-1.789l0.955,1.836h98.287l1.49-2.566c-3.955,0-7.16-3.207-7.16-7.16v-83.273\n\n     c0-3.955,3.205-7.162,7.16-7.162h45.115c3.955,0,7.16,3.207,7.16,7.162v83.273c0,3.953-3.205,7.16-7.16,7.16h-1.848l1.252,2.566\n\n     H668\n', 'M533.523,379.307\n\n          c0,7.316-5.934,13.248-13.25,13.248c-7.314,0-13.248-5.932-13.248-13.248s5.934-13.248,13.248-13.248\n\n         C527.59,366.059,533.523,371.99,533.523,379.307z\n']
      }
    ]
  },
  {
    state: 'good-to-know',
    navImageActive: 'images/info-good-to-know.png',
    navImageInactive: 'images/info-good-to-know-white.png',
    title: 'Wissenswertes',
    descriptionTitle: 'Hörsystem ist nicht gleich Hörsystem.',
    description: 'Es gibt unterschiedliche Bauformen. Generell gibt es die Möglichkeit, Hörsysteme im Ohr oder hinter dem Ohr zu tragen.',
    startingImage: 'images/info-good-to-know-starting.png',
    panelHeight: 364,
    items: [
      {
        title: 'Das Hörsystem passend zum Hörverlust.',
        description: 'Welches Hörsystem das richtige ist, hängt unter anderem von Ihrem Hörverlust, also dem akustischen Bedarf, ab. Ermittelt wird der durch audiometrische Messungen  bei Ihrem Akustiker.',
        image: 'images/info-hearing-loss-meaning-item-5.png'
      },
      {
        title: 'Das Hörsystem passend zum Alltag.',
        description: 'Neben dem akustischen Bedarf spielt Ihr Alltag eine wichtige Rolle. Dazu gehören der berufliche Alltag, Ihr persönliches Komfortempfinden und auch Ihre Freizeitvorlieben. Denn: Für die Anpassung ist es entscheidend, ob sie sich gern in der Natur aufhalten, Musikliebhaber sind oder lieber Fernsehabende genießen.',
        image: 'images/info-good-to-know-item-2.png'
      },
      {
        title: 'Was drin steckt macht den Unterschied.',
        description: 'Hörsysteme sind mit einem hohen Maß an modernster Technologie ausgestattet. Es gibt unterschiedliche Technologiestufen, die dem Hörsystem seine „Fähigkeiten“ verleihen. Diese Fähigkeiten können beispielsweise sein, Nebengeräusche zu unterdrücken, Sprache  oder Musik automatisch zu erkennen.',
        image: 'images/info-good-to-know-item-3.png'
      },
      {
        title: 'Was bedeuten Kanäle?',
        description: 'Hörsysteme verfügen über sogenannte Kanäle. Je mehr Kanäle ein Hörsystem besitzt, desto mehr Flexibilität gibt es bei der Anpassung und desto genauer kann es auf Ihre Bedürfnisse abgestimmt werden. Das Ziel: Den Hörverlust durch das Hörsystem in jedem Frequenzbereich bestmöglich zu kompensieren.',
        image: 'images/info-good-to-know-item-4.png'
      }
    ]
  }
])
.constant('MATRIX_SITUATIONS', [
  { name: 'Straße', icon: 'images/traffic-light.png' },
  { name: 'Musik', icon: 'images/music.png' },
  { name: 'Restaurant', icon: 'images/restaurant.png' },
  { name: 'Natur', icon: 'images/nature.png' },
  { name: 'Sprache in Ruhe', icon: 'images/speech.png' },
  { name: 'Telefonieren', icon: 'images/telephone.png' }
])
.constant('MATRIX_RATINGS', {
  2: [1, 1, 1, 2, 2, 2],
  3: [2, 2, 2, 3, 3, 5],
  5: [3, 3, 3, 4, 4, 5],
  7: [4, 4, 4, 5, 5, 5],
  9: [5, 5, 5, 5, 5, 5]
})
.constant('LISTENING_SITUATIONS', [
  {
    state: 'road',
    title: 'Straße',
    audioFolder: 'audio/road/',
    navImageActive: 'images/listening-situation-road.png',
    navImageInactive: 'images/listening-situation-road-white.png',
    background: 'images/traffic-bg.jpg',
    moreInfo: 'Im Straßenverkehr geht es oft turbulent und laut zu. Aber nicht nur, wenn Sie am Steuer sitzen, leiden Ihre Ohren. Auch wenn Sie sich nur in der Nähe einer Straße aufhalten und sich unterhalten, können quietschende Autorreifen, LKW’s, lautes Hupen oder Straßenarbeiten Ihre Unterhaltung signifikant erschweren.  Diese Situation ist auch ohne Hörverlust bereits eine schwierige akustische Situation, die Konzentration erfordert. Dabei stehen nicht nur Gespräche im Vordergrund, denn auch die Sicherheit ist hier ein wichtiges Thema. Um sicher im Straßenverkehr unterwegs zu sein, ist es notwendig, Signale eines Krankenwagens oder die Klingel eines sich von hinten nähernden Fahrrades zu hören. Damit Sie in dieser Situation gut hören und somit auch reagieren können, hat HANSATON in seine Hörsysteme Richtmikrofone und eine Störgeräuschreduktion integriert.',
    didYouKnowStyle: 'left',
    didYouKnow: ['Abhilfe können Sie sich zudem selbst schaffen, indem Sie mit dem Rücken zur Straße stehen, wenn Sie sich unterhalten und möglichst nicht direkt an der Straße stehen.']
  },
  {
    state: 'music',
    title: 'Musik',
    audioFolder: 'audio/music/',
    navImageActive: 'images/listening-situation-music.png',
    navImageInactive: 'images/listening-situation-music-white.png',
    background: 'images/music-bg.jpg',
    moreInfo: 'Es gibt viele unterschiedliche Musikrichtungen, jedoch haben sie alle eines gemeinsam: für den vollen Genuss müssen Sie die Töne Ihrer Lieblingslieder in ihrer vollen Vielfalt hören. Den puren Musikgenuss erleben Sie mit dem speziellen Musikprogramm von HANSATON. Es wurde so entwickelt, dass es von alleine erkennt, wenn Sie Musik hören. Ein Wechsel in das Musikprogramm wird automatisch vom Hörsystem vollzogen - Sie brauchen sich um nichts mehr zu kümmern. Ihre Ohren sind somit optimal auf Klangvielfalt und Klangqualität eingestellt. Ab Technologielevel 7 können Sie die Vorzüge dieser automatischen Einstellung und den maximalen Musikgenuss erleben.\n\nAber auch in Technologielevel 3 und 5 kann Ihnen ein individuelles Musikprogramm eingestellt werden. Diese Einstellung erfolgt durch Ihren Hörgeräteakustiker.\nFür eine optimale Anpassung ist es wichtig, dass Sie Ihrem Hörgeräteakustiker möglichst detailliert den bevorzugten Klang beschreiben. Bevorzugen Sie einen tiefen Klang mit einer hohen Bassverstärkung oder lieber hochfrequente Anteile, um bei klassischer Musik einzelne Instrumente besser heraushören zu können? Fragen, die Sie ganz einfach mit Ihrem Hörgeräteakustiker besprechen können.',
    didYouKnowStyle: 'right',
    didYouKnow: ['Generell kann gesagt werden, dass Sie unangenehme Empfindungen in Musiksituationen mindern können, wenn Sie darauf achten, dass Sie nicht direkt neben einem Lautsprecher sitzen, der sehr hohe Pegel überträgt und somit sehr laut ist.']
  },
  {
    state: 'restaurant',
    title: 'Restaurant',
    audioFolder: 'audio/restaurant/',
    navImageActive: 'images/listening-situation-restaurant.png',
    navImageInactive: 'images/listening-situation-restaurant-white.png',
    background: 'images/restaurant-bg.jpg',
    moreInfo: 'HANSATON Hörsysteme mit HD Technologie können für Sie das Hören besonders in akustisch schwierigen Situationen deutlich erleichtern.  Eine sehr komplexe aber dennoch alltägliche Situation ist der Aufenthalt in einem Restaurant oder in Gesellschaft mit mehreren Personen mit zusätzlich starken Nebengeräuschen. Sowohl Hintergrundmusik, Hintergrundgespräche anderer Personen als auch das Klirren von Geschirr  machen es besonders schwierig, Sprache zu verstehen und damit auch, einem Gespräch zu folgen. Ohne HD Technologie gleichen Sprache, Lautstärke und Tonhöhe anderer Personen im Raum  der Sprache Ihres Gesprächspartners. Damit Sie der Unterhaltung ohne Anstrengung folgen können ist es jedoch wichtig, dass Ihre Hörsysteme unterscheiden können, welches Gespräch im Fokus stehen soll und was lediglich ein störendes Nebengeräusch für Sie darstellt.',
    didYouKnowStyle: 'left',
    didYouKnow: ['Um die technischen Lösungen für solche akustisch sehr komplexen Situationen optimal nutzen zu können, ist es vorteilhaft, wenn Sie es vermeiden, sich direkt neben den Lautsprecher oder andere Musikquellen zu setzen.', 'Darüber hinaus hilft es, Ihren Gesprächspartner beim Sprechen direkt anzusehen.']
  },
  {
    state: 'nature',
    title: 'Natur',
    audioFolder: 'audio/nature/',
    navImageActive: 'images/listening-situation-nature.png',
    navImageInactive: 'images/listening-situation-nature-white.png',
    background: 'images/nature-bg.jpg',
    moreInfo: 'Denken Sie an einen schönen Frühlingstag: die Sonne scheint, die Blumen blühen und die Landschaft erstrahlt in einem satten Grün. Wer möchte da nicht raus aus den vier Wänden und die Natur genießen - mit allem, was diese zu bieten hat? Auch akustisch hält ein schöner Ausflug in die Natur einiges für Sie bereit. Mit den HD Hörsystemen von HANSATON können Sie Ausflüge und lange Spaziergänge akustisch in ihrer vollen Vielfalt erleben. Hören Sie Naturgeräusche wie Vogelgezwitscher, das sanfte Rauschen der Blätter oder das beruhigende Plätschern eines Baches.',
    didYouKnowStyle: 'left',
    didYouKnow: ['Ein Hörverlust beginnt meist damit, dass man zuerst die hochfrequenten Töne nicht mehr hören kann. Das Ganze passiert schleichend, oftmals bemerken wir gar nicht, dass uns etwas fehlt. Wir gewöhnen uns an unseren Hörverlust. Diese verlorenen Töne geraten dann nach und nach in Vergessenheit. Besonders die unterschiedlichen Facetten der Natur sind davon betroffen. So beispielsweise auch Vogelgezwitscher und das Zirpen der Grillen. Je früher die Unterstützung durch ein Hörsystem erfolgt, desto länger bleiben uns die wertvollen akustischen Schätze der Natur erhalten.']
  },
  {
    state: 'speaking',
    title: 'Sprache in Ruhe',
    audioFolder: 'audio/speaking/',
    navImageActive: 'images/listening-situation-quiet-speaking.png',
    navImageInactive: 'images/listening-situation-quiet-speaking-white.png',
    background: 'images/quiet-speaking-bg.jpg',
    moreInfo: 'Aus akustischer Sicht stellen sich auch ruhige Situationen mit Hörsystemen wesentlich angenehmer dar als ohne. Auch wenn Sie kaum von Störgeräuschen umgeben sind, kann es sein, dass Sie sich voll und ganz auf Sprache konzentrieren müssen. Zum Beispiel, wenn Sie mit einer weiteren Person in Ruhe einen Film genießen möchten. Dank Verstärkung durch  die Hörsysteme folgen Sie und Ihr Partner dem TV-Programm  bei gleicher Lautstärke. Damit wird verhindert, dass die Lautstärke für Ihren Partner unangenehm laut oder für Sie unangenehm leise wahrgenommen wird. Auch in Gesprächen vereinfacht HD Technologie das Hören und Wahrnehmen. Sie müssen sich weniger anstrengen beim Zuhören und Ihr Gesprächspartner kann in gewohnter Lautstärke sprechen. Besonders natürlich wird die Situation dadurch, dass die Mikrofone der Hörsysteme die geringen Nebengeräusche um Sie herum nicht komplett unterdrücken und somit dafür sorgen, dass Sie Ihre Umgebung dabei dennoch räumlich wahrnehmen. Auch während des Fernsehens können Sie die Türklingel oder das Telefon hören.',
    didYouKnowStyle: 'split',
    didYouKnow: ['Dass Sie unter einem Hörverlust leiden, fällt meist zuerst den Personen in Ihrem alltäglichen Umfeld auf, bevor Sie es bemerken. Besonders deutlich wird dies beim gemeinsamen TV-Abend oder bei einem Gespräch. Der Fernseher wird dabei von Ihrem Umfeld als besonders laut wahrgenommen, bei Gesprächen müssen andere oft laut sprechen. Für Sie ist die Situation besonders anstrengend, weil Sie versuchen, diesen Verlust mit einem höheren Konzentrationsaufwand auszugleichen.']
  },
  {
    state: 'telephone',
    title: 'Telefonieren',
    audioFolder: 'audio/telephone/',
    navImageActive: 'images/listening-situation-telephone.png',
    navImageInactive: 'images/listening-situation-telephone-white.png',
    background: 'images/telephone-bg.jpg',
    moreInfo: 'Telefonieren verbindet uns seit Generationen auch über große Entfernungen mit anderen Menschen. Ganz gleich ob beruflich oder privat. Früher mussten Hörsysteme häufig zum Telefonieren herausgenommen werden. HANSATON setzt aus diesem Grund die neue Technologie BiPhone ein, um Telefonieren mit dem Hörsystem einfach und in ausgezeichneter Qualität möglich zu machen. Das Hörsystem schaltet sich automatisch in diese spezielle Telefonfunktion, wenn Sie den Hörer an das Ohr halten - unabhängig davon, welches Ohr zum Telefonieren verwendet wird. Mit der BiPhone Funktion wird das Telefongespräch automatisch auf beide Hörsysteme übertragen. Sie können sich somit voll und ganz auf Ihr Telefonat konzentrieren und entspannt zuhören, sowohl  zu Hause als auch  unterwegs.',
    didYouKnowStyle: 'left',
    didYouKnow: ['Besonders vorteilhaft: die richtige Lautstärkeeinstellung können Sie über Ihr Telefon vornehmen. Darüber hinaus bietet Ihnen die Wireless-Fähigkeit (BiLink) der Hörsysteme die  Möglichkeit, diese kabellos mit dem Smartphone zu verbinden. Mehr Informationen  zum Thema Bluetooth und Zubehör erhalten Sie bei Ihrem Hörgeräteakustiker oder unter dem Menüpunkt „Zubehör“']
  }
])
.constant('LISTENING_AUDIO_TYPES', [
  { name: 'Ohne Hörverlust', file: 'base.mp3' },
  { name: 'Mittlerer Hörverlust', file: 'hearing-loss.mp3' },
  { name: 'Economy (3)', file: 'soundHD-3.mp3' },
  { name: 'Comfort (5)', file: 'soundHD-5.mp3' },
  { name: 'Business (7)', file: 'soundHD-7.mp3' },
  { name: 'First (9)', file: 'soundHD-9.mp3' }
])
.constant('CARE_TYPES', [
  {
    state: 'cleaning',
    name: 'Reinigen',
    navImageActive: 'images/cleaning.png',
    navImageInactive: 'images/cleaning-white.png',
    products: [

      {
        name: 'Reinigungsflüssigkeit',
        image: 'images/HADEO_Reinigungsfluessigkeit_DE_EN.jpg',
        text: 'HADEO Reinigungsflüssigkeit zur Reinigung von HdO-Ohrstücken.',
        orderedList: [
          'Flüssigkeit in einen Behälter füllen.',
          'HdO-Ohrstück mindestens 15 Min. in die Flüssigkeit legen.',
          'Das HdO-Ohrstück mit Wasser abspülen.'
        ]
      },
      {
        name: 'Reinigungskonzentrat',
        image: 'images/HADEO_Reinigungskonzentrat_DE_EN.jpg',
        text: 'HADEO Reinigungskonzentrat zur Reinigung von HdO-Ohrstücken',
        orderedList: [
          'Konzentrat mit Wasser (1:5) in einen Behälter füllen.',
          'HdO-Ohrstück mind.15 Min. in die Flüssigkeit legen.',
          'Danach das HdO-Ohrstück mit Wasser abspülen.'
        ]
      },

      {
        name: 'Reinigungsspray',
        image: 'images/HADEO_Reinigungsspray_DE_EN.jpg',
        text: 'Mit Dosierpinsel zur Reinigung von IO-Hörsystemen',

        orderedList: [
          'Den Sprühknopf der Sprayflasche drücken bis  der Pinsel benetzt ist.',
          'IO-Hörsystem mit Pinsel  in kreisenden Bewegungen reinigen.',
          'Hörsystem anschließend mit einem fusselfreien, trockenen Tuch abreiben.'
        ]
      },
      {
        name: 'Reinigungstücher',
        image: 'images/HADEO_Reinigungstuecher_DE_EN.jpg',
        text: 'HADEO Reinigungstücher zur mühelosen Reinigung von Hörsystemen',
         orderedList: [
          ' HdO-Hörsysteme: Schallschlauch vom Hörsystem trennen',
          ' HdO-/IO-Hörsystem mit dem feuchten Tuch abreiben.'
        ]
      },
      {
        name: 'Reinigungstücher im praktischen Spender',
        image: 'images/HADEO_Reinigungsteucher_im_Spender_DE_EN.jpg',
        text: 'HADEO Reinigungstücher im praktischen Spender zur einfachen Reinigung von Hörsystemen.',
        orderedList: [
            'HdO-Hörsysteme Schallschlauch vom Hörsystem trennen.',
            'HdO-/IO-Hörsystem mit dem feuchten Tuch abreiben'

        ]
      },
      {
        name: 'HADEO SPABOX 3.0',
        image: 'images/HADEO_SPABOX_3.0.jpg',
        text: 'Die perfekte Pflege für Ohrstücke, Minischläuche und Gehörschutz.',
        bulletPoints: [
          'Professionelle Intensiv-Reinigung und hygienische Pflege',
          'Einfache Bedienung durch Sensortaste',
          'Starke 25 Watt Leistung',
          'Energiesparende 8-Minuten-Abschaltautomatik',
          'Leicht zu befüllender 100 ml-Edelstahltank',
          'Erhöhte Reinigungswirkung durch Zugabe von HADEO-Konzentrat'

        ]
      },
      {
        name: 'Starter-Set I',
        image: 'images/HADEO_Starter-Set_I_DE_EN.jpg',
        text: 'HADEO Starter-Set für IO-Hörsysteme in transparenter PVC-Tasche kombiniert sinnvoll unterschiedliche Reinigungsprodukte.',
         orderedList: [
          'einzeln verpackte Reinigungstücher',
          'Trockenkapseln',
          'Trockenbehälter'
        ]
      },
      {
        name: 'Starter-Set II',
        image: 'images/HADEO_Starter-Set_II_DE_EN.jpg',
        text: 'HADEO Starter-Set für HdO-Hörsysteme in transparenter PVC-Tasche kombiniert sinnvoll unterschiedliche Reinigungsprodukte.',
        orderedList: [
          'einzeln verpackte Reinigungstücher',
          'Trockenkapseln',
          'Trockenbeutel',
          'Puster'
        ]
      },
      {
        name: 'Reinigungs-Set',
        image: 'images/Starter_Sets.jpg',
        text: 'Besonders vorteilhaft sind die praktischen HADEO Sets. Reinigungs-Sets bieten alle erforderlichen Produkte sinnvoll kombiniert und perfekt aufeinander abgestimmt.'
      }
    ]
  },
  {
    state: 'drying',
    name: 'Trocknen',
    navImageActive: 'images/drying.png',
    navImageInactive: 'images/drying-white.png',
    products: [


      {
        name: 'HADEO Drybox 3.0 Avantgarde',
        image: 'images/HADEO_DRYBOX_3.0_Avantgarde_DE_EN.jpg',
        text: 'Elektronische HADEO Trockenstation für HdO-, IO-Hörsysteme und IO-Kopfhörer.',
        bulletPoints: [
          'Schonende Trocknung und Pflege durch das Konvektionsprinzip',
          '99,9 % Keimreduzierung durch UVC-Bestrahlung',
          '2 Programme: Basistrocknung von 2,5 Stunden und Komforttrocknung von 5 Stunden',
          'Einfache Handhabung durch Sensortaste und Zustandsanzeige',
          'Energiesparend, sicher, prozessorgesteuert.'
        ]
      },
      {
        name: 'HADEO Drybox 3.0 Classic',
        image: 'images/HADEO_DRYBOX_3.0_Classic_DE_EN.jpg',
        text: 'Elektronische HADEO Trockenstation für HdO-, IO-Hörsysteme und IO-Kopfhörer.',
        bulletPoints: [
          'Schonende Trocknung und Pflege durch das Konvektionsprinzip',
          '2 Trockenprogramme: Basistrocknung von 2,5 Stunden und Komforttrocknung von 5 Stunden',
          'Einfache Handhabung durch Sensortaste und Zustandsanzeige',
          'Energiesparend, sicher, prozessorgesteuert.'
        ]
      },
      {
        name: 'Puster',
        image: 'images/HADEO_Puster_DE_EN.jpg',
        text: 'HADEO Puster zum Trocknen von Schallschläuchen und HdO-Ohrstücken. \nNach der Reinigung von HdO- Ohrstücken den Puster fest an den Schallschlauch halten und drücken.',
      },
      {
        name: 'Trockenbehälter',
        image: 'images/HADEO_Trockenbehaelter_DE_EN.jpg',
        text: 'HADEO Trockenbehälter zum Trocknen von Hörsystemen und HdO-Ohrstücken.',
        orderedList: [
              'Das HdO-Ohrstück, das Hörsystem und die Trockenkapsel in den Trockenbehälter legen.',
              'Behälter gut (gemäß Gebrauchsanweisung) verschließen.'

        ]
      },
      {
        name: 'Trockenkapseln',
        image: 'images/HADEO_Trockenkapseln_DE_EN.jpg',
        text: 'HADEO Trockenkapseln zum Trocknen von Hörsystemen und HdO-Ohrstücken.',
        orderedList: [
              'Das HdO-Ohrstück, das Hörsystem und die Trockenkapsel in den Trockenbeutel/den Trockenbehälter legen.',
              'Beutel/Behälter gut (gemäß Gebrauchsanweisung) verschließen.'
        ]
      },
      {
        name: 'Trocken-Set',
        image: 'images/HADEO_Trocken-Set_mit_Trockenkapseln_DE_EN.jpg',
        text: 'HADEO Trocken-Set kombiniert sinnvoll unterschiedliche Trockenprodukte.',
        orderedList: [
              'Trockenkapseln ',
              'Trockenbeutel'
        ]
      },
    ]
  }
])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('situation', {
      url: '/situation/:situationId',
      templateUrl:'situation.html',
      controller: 'SituationController',
      reloadOnSearch: false
    })
    .state('products', {
      url: '/products',
      templateUrl: 'products.html'
    })
    .state('product', {
      url: '/products/:product',
      templateUrl: 'product.html',
      controller: 'ProductController',
      abstract: true
    })
    .state('product.list', {
      url: '/',
      templateUrl: 'product.list.html',
      controller: 'ProductListController'
    })
    .state('product.model', {
      url: '/:design/{color:int}',
      templateUrl: 'product.model.html',
      controller: 'ProductModelController'
    })
    .state('reise', {
      url: '/reise',
      templateUrl: 'reise.html',
      controller: 'ReiseController'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'main.html',
      controller: 'MainController'
    })
    .state('technology', {
      url: '/technology',
      templateUrl: 'technology.html',
      controller: 'TechnologyController',
      abstract: true
    })
    .state('technology.performance-levels', {
      url: '/performance-levels/{level:int}',
      templateUrl: 'performance-levels.html',
      controller: 'PerformanceLevelsController'
    })
    .state('technology.matrix', {
      url: '/matrix',
      templateUrl: 'technology.matrix.html',
      controller: 'TechnologyMatrixController'
    })
    .state('overview', {
      url: '/overviews/:topic',
      templateUrl: 'overview.html',
      controller: 'OverviewController'
    })
    .state('info', {
      url: '/info/:topic',
      templateUrl: 'info.html',
      controller: 'InfoController'
    })
    .state('accessories', {
      url: '/accessories',
      templateUrl: 'accessories.html',
      controller: 'AccessoriesController',
      abstract: true
    })
    .state('accessories.overview', {
      url: '/overview/{accessory:int}',
      templateUrl: 'accessories.overview.html',
      controller: 'AccessoriesOverviewController'
    })
    .state('accessories.feature', {
      url: '/feature/:feature',
      templateUrl: 'accessories.feature.html',
      controller: 'AccessoriesFeatureController'
    })
    .state('listening', {
      url: '/listening/:situation',
      templateUrl: 'listening.html',
      controller: 'ListeningController'
    })
    .state('product-care', {
      url: '/product-care/:type',
      templateUrl: 'product-care.html',
      controller: 'ProductCareController'
    });

    $urlRouterProvider.otherwise('/main');
})
.factory('find', function () {
  return function (arr, key, val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][key] === val) {
        return arr[i];
      }
    }
  };
})
.filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
