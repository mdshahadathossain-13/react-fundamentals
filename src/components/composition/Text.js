function Text({ addEmoji }) {
    const text = 'I love JS';
    return 
    // eslint-disable-next-line no-unreachable
    <div>
        {addEmoji ? addEmoji(text, 'heart' ) : text }
    </div>;
}
export default Text;
