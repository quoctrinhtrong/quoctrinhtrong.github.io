const styles = () => ({
  globalLoading: {
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  loadingIcon: {
    left: 0,
    right: 0,
    position: 'fixed',
    margin: '0 auto',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 100,
  },
});

export default styles;
