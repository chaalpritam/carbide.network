import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageContainer, PageHeader } from "@/components/page-layout"

export default function PrivacyPage() {
    return (
        <div className="bg-white text-black min-h-screen">
            <Header />
            <PageContainer>
                <PageHeader
                    title={<>Privacy <span className="italic-serif">Policy</span></>}
                    subtitle="How we handle your data and protect your privacy on the Carbide Network."
                />

                <div className="prose prose-sm md:prose-base max-w-3xl space-y-12">
                    <section>
                        <h2 className="text-2xl font-medium mb-4">Zero-Knowledge by Default</h2>
                        <p className="text-black/60 leading-relaxed">
                            Carbide is built on a zero-knowledge architecture. This means that we, and the providers on the network, have no way of accessing your unencrypted data. Encryption happens entirely on your device before it ever enters the network.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium mb-4">Data Collection</h2>
                        <p className="text-black/60 leading-relaxed">
                            We collect minimal metadata necessary for the operation of the decentralized network, such as:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-black/60">
                            <li>Public wallet addresses for payment and provider identification.</li>
                            <li>Encrypted file sharding metadata required for retrieval.</li>
                            <li>Network performance statistics (uptime, latency) for providers.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-medium mb-4">Your Rights</h2>
                        <p className="text-black/60 leading-relaxed">
                            Because you hold the encryption keys, you have total control over your data. You can delete your sharded data from the network at any time, and no copies will remain accessible to anyone without your private keys.
                        </p>
                    </section>
                </div>
            </PageContainer>
            <Footer />
        </div>
    )
}
