import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer, PageHeader } from "@/components/page-layout"

export default function TermsPage() {
    return (
        <div className="bg-white text-black min-h-screen">
            <Header />
            <PageContainer>
                <PageHeader
                    title={<>Terms of <span className="italic-serif">Service</span></>}
                    subtitle="The legal framework for using and providing storage on the Carbide Network."
                />

                <div className="prose prose-sm md:prose-base max-w-3xl space-y-12">
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Acceptance of Terms</h2>
                        <p className="text-black/60 leading-relaxed">
                            By accessing or using the Carbide Network, you agree to be bound by these Terms of Service. Carbide is a decentralized protocol, and you acknowledge that you are interacting with a peer-to-peer network.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium mb-4">Provider Obligations</h2>
                        <p className="text-black/60 leading-relaxed">
                            If you choose to become a storage provider, you agree to maintain the uptime and redundancy levels specified by your node configuration. Failure to provide data upon request may result in loss of earnings or slashing of collateral as defined by the protocol.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium mb-4">User Responsibilities</h2>
                        <p className="text-black/60 leading-relaxed">
                            You are solely responsible for the management of your private encryption keys. Carbide cannot recover your data if you lose your keys, as we never have access to them.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium mb-4">Limitation of Liability</h2>
                        <p className="text-black/60 leading-relaxed">
                            Carbide is provided &quot;as is&quot; without warranties of any kind. As a decentralized network, the performance is dependent on the aggregate behavior of independent participants.
                        </p>
                    </section>
                </div>
            </PageContainer>
            <Footer />
        </div>
    )
}
