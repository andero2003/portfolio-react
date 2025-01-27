import { motion } from "framer-motion";

type DefaultAnimatedPageProps = {
    children: React.ReactNode
    key: string
    className?: string
}

export const DefaultAnimatedPage = ({ children, className, key }: DefaultAnimatedPageProps) => {
    return (
        <motion.div
            initial={{ x: '100vw', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-100vw', opacity: 0 }}
            transition={{ duration: 0.5 }}//{{ type: 'spring', stiffness: 200, damping: 20, duration: 0.1, }}
            className={className}
            key={key}
        >
            {children}
        </motion.div>
    );
}