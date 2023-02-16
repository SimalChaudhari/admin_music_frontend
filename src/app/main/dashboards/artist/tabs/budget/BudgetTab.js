import { motion } from 'framer-motion';
import BudgetDetailsWidget from './widgets/BudgetDetailsWidget';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BudgetTab() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div style={{
        textAlign: 'end',
        marginRight: '25px'
      }}>
        <Button
          className="whitespace-nowrap"
          variant="contained"
          color="secondary"
          startIcon={<FuseSvgIcon size={20}>heroicons-solid:plus</FuseSvgIcon>}
        >
          Add Artist
        </Button>

      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-6 gap-24 w-full min-w-0 p-24"
        variants={container}
        initial="hidden"
        animate="show"
      >

        <motion.div variants={item} className="sm:col-span-6">
          <BudgetDetailsWidget />
        </motion.div>
      </motion.div>
    </>
  );
}

export default BudgetTab;
