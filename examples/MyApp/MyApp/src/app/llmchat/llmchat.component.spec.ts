import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLMChatComponent } from './llmchat.component';

describe('LLMChatComponent', () => {
  let component: LLMChatComponent;
  let fixture: ComponentFixture<LLMChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LLMChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LLMChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
