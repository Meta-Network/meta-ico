import { useState, useRef, MutableRefObject, useEffect } from "react";
import { Button, Link, AlertDialog, AlertDialogOverlay, AlertDialogBody, AlertDialogFooter, AlertDialogContent, AlertDialogHeader } from "@chakra-ui/react";
import { useWallet, ChainUnsupportedError, ConnectionRejectedError } from "use-wallet";

type WalletErrorMessage = {
    title: string;
    content: string;
    help?: {
        text: string;
        link: string;
    };
}

export function WalletErrorPopup() {
    const wallet = useWallet()
    const [walletErrorMsg, updateMsg] = useState<WalletErrorMessage | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef() as MutableRefObject<any>

    useEffect(() => {
        // 其他网络
        if (wallet.error instanceof ChainUnsupportedError) {
            updateMsg({
                title: 'Wrong Network detected',
                content: 'Please switch your network to the Binance Smart Chain Mainnet.',
                help: {
                        text: 'How to connect BSC Mainnet?',
                        link: 'https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain'
                }
            })
        }
        // 钱包拒绝连接
        if (wallet.error instanceof ConnectionRejectedError) {
            updateMsg({
                title: 'Connection Rejected',
                content: 'The connector says that you rejected the connection.'
            })
            console.error('Connection Rejected', wallet.error)
        }
        if (wallet.error) setIsOpen(true); // 非空即弹
    }, [wallet.error])
    
    return <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              { walletErrorMsg?.title }
            </AlertDialogHeader>
            
            <AlertDialogBody>
              { walletErrorMsg?.content }
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                        Close
              </Button>
                    
                    {walletErrorMsg?.help && <Button as={Link} isExternal
                        href={walletErrorMsg.help.link} colorScheme="blue" onClick={onClose} ml={3}>
                            {walletErrorMsg.help.text}
              </Button>
              }
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
}