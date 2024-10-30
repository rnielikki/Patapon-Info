# getHitPercussion

Checks if any drum is pressed.

## Code Information

- **Name**: `getHitPercussion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 04 00`
- **Assembly Address in Memory** : `0x8970404`

## Parameters

- `(int *)drum_id` *(8 bytes)* : Variable to *store* the [drum ID](./guide/reference-table.md#drum-ids). **0 if no drum is pressed**.

## Example

Here is one example in hex:

```25 0c 04 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getHitPercussion((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08970404(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  *piVar1 = 0;
  if (*(int *)(*(int *)(param_1 + 0x10) + 0x158) != 0) {
    piVar2 = (int *)func_0x08b5f810();
    if ((0 < *piVar2) && (piVar2[3] != 4)) {
      *piVar1 = *piVar2;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

