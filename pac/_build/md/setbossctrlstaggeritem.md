# setBossCtrlStaggerItem

Defines what item will be dropped when the boss is being staggered. Meant for Patapon 2 boss item drop.

## Code Information

- **Name**: `setBossCtrlStaggerItem`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 29 00`
- **Assembly Address in Memory** : `0x8b5e4b8`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)in_generator_id` *(8 bytes)* : *ID in the generator*.
- `(int)item_table_id` *(8 bytes)* : [Item table ID](./beginappearitem.md) to drop when being staggered.

## Example

Here is one example in hex:

```25 1f 29 00 / 04 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
setBossCtrlStaggerItem((int *)iVar1, (int)0, (int)2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5e4b8(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  int iVar4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  iVar4 = *(int *)(param_1 + 0x10);
  if (iVar4 == 0) {
    iVar4 = 0;
  }
  else if (*piVar1 == -1) {
    iVar4 = 0;
  }
  else {
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    iVar4 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar4 + 0x2c8));
    if (iVar4 == 0) {
      iVar4 = 0;
    }
  }
  if (iVar4 != 0) {
    FUN_Mission__08b579b0(iVar4,*puVar2,*puVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

