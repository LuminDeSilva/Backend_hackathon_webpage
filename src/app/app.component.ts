import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emojis: Emoji[] = [];
  selectedEmoji: Emoji | null = null;
  title = 'emoji';

  ngOnInit() {
    // through this emoji can be fetched through api
    this.emojis = mockEmojis;
  }
  
  selectEmoji(emoji: Emoji) {
    this.selectedEmoji = emoji;
  }
}

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string;
}

const mockEmojis: Emoji[] = [
  {
    name: "Grinning Face",
    category: "Smileys & Emotion",
    group: "Smileys",
    htmlCode: "&#128512;",
  },
  {name:"grinning face with smiling eyes",category:"smileys and people",group:"face positive",htmlCode:"\u0026#128513;"},{name:"face with tears of joy",category:"smileys and people",group:"face positive",htmlCode:"\u0026#128514;"},
  {name:"rolling on the floor laughing",category:"smileys and people",group:"face positive",htmlCode:"\u0026#129315;"},
  {name:"smiling face with open mouth",category:"smileys and people",group:"face positive",htmlCode:"\u0026#128515;"}
  // You can add emoji details here
];
