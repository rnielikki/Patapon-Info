# setPosX

Sets X position of the given generator.

## Code Information

- **Name**: `setPosX`
- **Scope**: Mission
- **PAC Instruction (Binary)**: `25 1f 05 00`
- **Assembly Address in Memory** : `0x8b5c208`

## Parameters

- `(int *)generator_index` *(8 bytes)* : Generator Index, obtained from [create](./create.md).
- `(float)position` *(8 bytes)* : X Position of the unit, as *PSP pixels in the world*.

Note that **PSP screen size is 480 x 272**.

## Example

Here is one example in hex:

```25 1f 05 00 / 08 00 00 00 / 1a 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setPosX(((global)int *)giVar26, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Mission__08b5c208(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
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
  if (iVar3 != 0) {
    *(undefined4 *)(iVar3 + 0x18) = *puVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

