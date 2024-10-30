# getCommandScore

Gets how perfect the recent command was, as original score. 400 times bigger than the result of [getCommandRate](./getcommandrate.md).

## Code Information

- **Name**: `getCommandScore`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 13 00`
- **Assembly Address in Memory** : `0x8970c80`

## Parameters

- `(int *)destination` *(8 bytes)* : Variable to *store* the command perfection score. 400 is all perfect, 0 if command is not ongoing.

## Remarks

This is from 

## Example

Here is one example in hex:

```25 0c 13 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
getCommandScore((int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970c80(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  *puVar1 = 0;
  if (iVar2 != 0) {
    *puVar1 = *(undefined4 *)(iVar2 + 0x6cc);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

