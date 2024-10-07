import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputSanitizerService {
  sanitizeInput(input: string): string {
    // Implement sanitization logic here
    return input.trim().replace(/<[^>]*>/g, ''); // Basic sanitization example
  }
}
