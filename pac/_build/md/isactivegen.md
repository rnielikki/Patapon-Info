# isActiveGen

check if the generator is loaded and active.

## Code Information

- **Name**: `isActiveGen`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 32 00`
- **Assembly Address in Memory** : `0x8b5ee10`

## Parameters

- `(int* )generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(uint *)is_active` *(8 bytes)* : Variable to *store* if the generator is active.

## Example

Here is one example in hex:

```25 1f 32 00 / 04 00 00 00 / 2b 00 00 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
isActiveGen((int *)iVar43, (int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5ee10(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else if (*piVar1 == -1) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = Get_BaseAddr_From_Generator(*(undefined4 *)(iVar3 + 0x2c8));
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if (iVar3 == 0) {
    *puVar2 = 0;
  }
  else {
    *puVar2 = (uint)*(byte *)(iVar3 + 0x24);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

