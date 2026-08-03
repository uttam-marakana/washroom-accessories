import { Component } from 'react';

/**
 * Error boundary to catch rendering errors and show a fallback.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an external service in production.
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <h2>Something went wrong</h2>
          <p>An unexpected error occurred. Please try again.</p>
          <button type="button" onClick={this.handleReset}>
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
