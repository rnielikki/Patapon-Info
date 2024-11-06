# spawn

Creates all enemies from the certain generator. Used after [getHandle](./gethandle.md).

## Code Information

- **Name**: `spawn`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 13 00`
- **Assembly Address in Memory** : `0x8b5d830`

## Parameters

- `(int *)handle` *(8 bytes)* : The [handle of the generator](./gethandle.md) to instantiate.

## Example

Here is one example in hex:

```25 1f 13 00 / 08 00 00 00 / 1a 00 00 00```

Which is interpreted as:

```c
spawn(((global)int *)giVar26)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5d830(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else if (*piVar1 == -1) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar2 + 0x2c8));
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (iVar2 != 0) {
    FUN_Mission__08b57c00(iVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
