import { Component } from '@angular/core';
import { LLMReplicate } from './LLM_replica/LLM_replica';
import dotenv from 'dotenv'
import promptSync from 'prompt-sync';

@Component({
  selector: 'app-llmchat',
  standalone: true,
  imports: [],
  templateUrl: './llmchat.component.html',
  styleUrl: './llmchat.component.css'
})
export class LLMChatComponent {
  prompt: string = "Who are you?";
}
const prompt = promptSync();

dotenv.config()

const llm_prompt = prompt('Enter LLM Prompt:');


const llmreplicate = new LLMReplicate();
const response = llmreplicate.runModel(llm_prompt);
console.log(response);