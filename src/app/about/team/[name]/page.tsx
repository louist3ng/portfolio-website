import React from 'react'

type Props = {
    params: Promise<{ name: string }>
}

const TeamMemberPage = async ({ params }: Props) => {
    const { name } = await params;
    return (
        <div className="text-white ">Team Member Page {name}
        </div>
    )
}

export default TeamMemberPage
