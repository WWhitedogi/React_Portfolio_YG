function Detail({ title, content, isActive, onTitleClick }) {
    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={onTitleClick}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content">
                {content}
            </div>}
        </div>
    );
}

export default Detail;
