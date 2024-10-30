# getFadeColor

Gets colour of the fading screen.

## Code Information

- **Name**: `getFadeColor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 88 00`
- **Assembly Address in Memory** : `0x892186c`

## Parameters

- `(float *)red` *(8 bytes)* : Red value of the fading screen.
- `(float *)green` *(8 bytes)* : Green Value value of the fading screen.
- `(float *)blue` *(8 bytes)* : Blue value of the fading screen.
- `(float *)alpha` *(8 bytes)* : Alpha of the fading screen.

## Example

Here is one example in hex:

```25 16 88 00 / 20 00 00 00 / 01 00 00 00 / 20 00 00 00 / 02 00 00 00 / 20 00 00 00 / 03 00 00 00 / 20 00 00 00 / 04 00 00 00```

Which is interpreted as:

```c
getFadeColor((float *)fVar1, (float *)fVar2, (float *)fVar3, (float *)fVar4)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892186c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 local_10;
  undefined4 local_c;
  undefined4 local_8;
  undefined4 local_4;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  *puVar1 = 0;
  *puVar2 = 0;
  *puVar3 = 0;
  *puVar4 = 0;
  if (*(int *)(param_1 + 0x10) != 0) {
    FUN_08992538(&local_10,*(undefined4 *)(*(int *)(param_1 + 0x10) + 200));
    *puVar1 = local_10;
    *puVar2 = local_c;
    *puVar3 = local_8;
    *puVar4 = local_4;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

