import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Index from './index';

describe('Index Page', () => {
  it('should render Hi text', () => {
    render(<Index />);
    const hiText = screen.getByText(/Hi/i);
    expect(hiText).toBeInTheDocument();
  });
});
