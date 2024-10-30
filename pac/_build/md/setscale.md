# setScale

Sets size of the given object with handle. Somehow it doesn't work with player unit.

## Code Information

- **Name**: `setScale`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 4b 00`
- **Assembly Address in Memory** : `0x8916008`

## Parameters

- `(int *)handle` *(8 bytes)* : The [handle](./guide/how-to-get-a-handle.md) of the unit.
- `(float)scale` *(8 bytes)* : Scale to adjust.
- `(float)Var2` *(8 bytes)* : *unused*

## Example

Here is one example in hex:

```25 17 4b 00 / 08 00 00 00 / a8 00 00 00 / 20 00 00 00 / 14 00 00 00 / 20 00 00 00 / 14 00 00 00```

Which is interpreted as:

```c
setScale(((global)int *)giVar168, (float *)fVar20, (float *)fVar20)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08916008(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar3 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (iVar3 != 0) {
      FUN_08880c64(*puVar2,iVar3);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

