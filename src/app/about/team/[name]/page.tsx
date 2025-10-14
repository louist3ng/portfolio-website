import React from 'react'

const TeamMemberPage = async ({ params }) => {
    const name = await params.name;
    return (
        <div className="text-white ">Team Member Page {name}
        </div>
    )
}

export default TeamMemberPage
